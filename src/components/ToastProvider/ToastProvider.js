import React, { useContext } from "react";

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

  return (
    <ToastContext.Provider value={{ createToast, deleteToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
