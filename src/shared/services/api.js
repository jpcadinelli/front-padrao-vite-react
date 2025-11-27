import axios from "axios";
import { toast } from "./../components/Toast/toastRef.js";

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
        toast.success("Operação realizada com sucesso!");
        return response;
    },
    (error) => {
        toast.error(error.response?.data?.message ?? `Erro: ${error.status}`);
        return Promise.reject(error);
    }
);

export default api;
