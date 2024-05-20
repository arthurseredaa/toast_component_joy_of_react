import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";
import { useToast } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast, toasts } = useToast();
  const [error, setError] = React.useState("");

  const [message, setMessage] = React.useState("");
  const [currentVariant, setCurrentVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const handleMessageChange = (e) => {
    e.stopPropagation();

    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      setError("Message is required");
      return;
    }

    createToast(message, currentVariant);

    setMessage("");
    setCurrentVariant(VARIANT_OPTIONS[0]);
    setError("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {!!toasts?.length && <ToastShelf />}

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                className={styles.messageInput}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((item) => (
                <label htmlFor={`variant-${item}`} key={item}>
                  <input
                    id={`variant-${item}`}
                    type="radio"
                    name="variant"
                    value={item}
                    checked={currentVariant === item}
                    onChange={() => setCurrentVariant(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {error && (
            <div className={styles.row}>
              <div className={styles.label} />
              <p className={styles.inputWrapper} style={{ color: "darkred" }}>
                {error}
              </p>
            </div>
          )}

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
