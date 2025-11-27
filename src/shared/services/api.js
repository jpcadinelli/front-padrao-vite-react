import axios from "axios";
import { toastContextRef } from "./../components/Toast/toastRef.js";

const api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        toastContextRef.current?.showToast("Operação realizada com sucesso!", "success");
        return response;
    },
    (error) => {
        toastContextRef.current?.showToast(
            error.response?.data?.message || "Erro: " + error.status,
            "error"
        );
        return Promise.reject(error);
    }
);

export default api;
