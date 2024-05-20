import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf() {
  const { toasts, deleteToast } = useToast();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => deleteToast(id)}>
            <VisuallyHidden>{variant}</VisuallyHidden>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
