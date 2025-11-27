import { useEffect, useRef } from "react";
import "./Toast.css";

export function ToastContainer({ toasts, removeToast }) {
    return (
        <div className="toast-container">
            {toasts.map((t) => (
                <ToastItem key={t.id} toast={t} removeToast={removeToast} />
            ))}
        </div>
    );
}

function ToastItem({ toast, removeToast }) {
    const timer = useRef(null);
    const hover = useRef(false);

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timer.current);
    }, []);

    const startTimer = () => {
        timer.current = setTimeout(() => {
            if (!hover.current) removeToast(toast.id);
        }, 5000);
    };

    const stopTimer = () => {
        hover.current = true;
        clearTimeout(timer.current);
    };

    const resume = () => {
        hover.current = false;
        startTimer();
    };

    return (
        <div
            className={`toast-item ${toast.type}`}
            onMouseEnter={stopTimer}
            onMouseLeave={resume}
        >
            {toast.message}
        </div>
    );
}
