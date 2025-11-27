import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoriasService } from "../services/categoriasService";

export default function CategoriaFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: "",
    });

    useEffect(() => {
        if (id) {
            categoriasService.buscarPorId(id)
                .then((res) => setForm(res.data))
                .catch(() => {});
        }
    }, [id]);

    const submit = (e) => {
        e.preventDefault();

        const action = id
            ? categoriasService.atualizar(id, form)
            : categoriasService.criar(form);

        action.then(() => {
            navigate("/categorias");
        });
    };

    return (
        <form onSubmit={submit}>
            <h1>{id ? "Editar Categoria" : "Nova Categoria"}</h1>

            <input
                value={form.nome}
                placeholder="Nome da categoria"
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />

            <br />

            <button type="submit">{id ? "Salvar" : "Criar"}</button>
        </form>
    );
}
