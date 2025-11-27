import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toastRef } from "./toastRef";
import {ToastContainer} from "./ToastContainer.jsx";

const ToastContext = createContext(undefined);

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, ...toast }]);

        return id;
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    useEffect(() => {
        toastRef.current = { addToast };
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}
