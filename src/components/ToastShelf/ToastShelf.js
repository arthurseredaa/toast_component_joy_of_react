import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onClose }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.length > 0 &&
        toasts.map(({ id, message, variant }) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} onClose={() => onClose(id)}>
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
