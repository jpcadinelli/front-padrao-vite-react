import api from "../../../shared/services/api";
import { ENDPOINTS } from "../../../shared/services/endpoints";

export const categoriasService = {
    listar: () => api.get(ENDPOINTS.CATEGORIAS),
    buscarPorId: (id) => api.get(`${ENDPOINTS.CATEGORIAS}/${id}`),
    criar: (dados) => api.post(ENDPOINTS.CATEGORIAS, dados),
    atualizar: (id, dados) => api.put(`${ENDPOINTS.CATEGORIAS}/${id}`, dados),
    deletar: (id) => api.delete(`${ENDPOINTS.CATEGORIAS}/${id}`),
};
