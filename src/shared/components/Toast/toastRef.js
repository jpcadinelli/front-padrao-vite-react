import { createRef } from "react";

export const toastRef = createRef();

export const toast = {
    success(message) {
        toastRef.current?.addToast({
            type: "success",
            message,
        });
    },
    error(message) {
        toastRef.current?.addToast({
            type: "error",
            message,
        });
    },
};
