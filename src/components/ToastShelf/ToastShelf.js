import React, { useEffect } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastProvider";

function ToastShelf() {
  const { toasts, deleteToast, resetToasts } = useToast();

  useEffect(() => {
    const handleCloseToasts = (e) => {
      if (e.code === "Escape") {
        resetToasts();
      }
    };

    window.addEventListener("keydown", handleCloseToasts);

    return () => {
      window.removeEventListener("keydown", handleCloseToasts);
    };
  }, [resetToasts]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => deleteToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
