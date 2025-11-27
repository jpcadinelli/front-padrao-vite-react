import { createContext, useContext, useState, useCallback, useEffect } from "react";
import ToastContainer from "./ToastContainer";
import { toastContextRef } from "./toastRef";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = "success") => {
        const id = Math.random().toString(36).substring(2, 9);

        setToasts((prev) => [...prev, { id, message, type }]);

        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    useEffect(() => {
        toastContextRef.current = { showToast };
    }, [showToast]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);
