import axios from "axios";

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
    (response) => response.data,
    (error) => {
        console.error("Erro na API:", error);
        return Promise.reject(error);
    }
);

export default api;
