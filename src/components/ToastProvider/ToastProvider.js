import React, { useContext } from "react";
import useKeydown from "../../hooks/useKeydown";

const ToastContext = React.createContext();

export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
  };

  const deleteToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const resetToasts = () => setToasts([]);

  useKeydown("Escape", resetToasts);

  return (
    <ToastContext.Provider
      value={{ createToast, deleteToast, toasts, resetToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
