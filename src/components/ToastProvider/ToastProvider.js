import React, { useCallback, useContext } from "react";
import useKeydown from "../../hooks/useKeydown";

const ToastContext = React.createContext();

export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = useCallback((message, variant) => {
    setToasts((prevState) => [
      ...prevState,
      { message, variant, id: crypto.randomUUID() },
    ]);
  }, []);

  const deleteToast = useCallback((id) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  }, []);

  const resetToasts = useCallback(() => setToasts([]), []);

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
