import { useEffect, useRef } from "react";
import "./Toast.css";

export default function ToastContainer({ toasts, removeToast }) {
    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <ToastItem
                    key={toast.id}
                    toast={toast}
                    removeToast={removeToast}
                />
            ))}
        </div>
    );
}

function ToastItem({ toast, removeToast }) {
    const timerRef = useRef(null);
    const delay = 5000;

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timerRef.current);
    }, []);

    const startTimer = () => {
        timerRef.current = setTimeout(() => {
            removeToast(toast.id);
        }, delay);
    };

    const pauseTimer = () => {
        clearTimeout(timerRef.current);
    };

    const resumeTimer = () => {
        startTimer();
    };

    return (
        <div
            className={`toast ${toast.type}`}
            onMouseEnter={pauseTimer}
            onMouseLeave={resumeTimer}
        >
            {toast.message}
        </div>
    );
}
