import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productMockService } from "../services/productMockService";
import { toast } from "./../../../shared/components/Toast/toastRef.js";

export default function ProdutoFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({ nome: "", preco: "", estoque: "" });

    useEffect(() => {
        if (id) {
            productMockService.getById(id).then((data) => setForm(data));
        }
    }, [id]);

    const submit = (e) => {
        e.preventDefault();

        const action = id
            ? productMockService.update(id, form)
            : productMockService.create(form);

        action.then(() => {
            toast.success(id ? "Produto atualizado!" : "Produto criado!");
            navigate("/produtos");
        });
    };

    return (
        <form onSubmit={submit}>
            <h1>{id ? "Editar Produto" : "Novo Produto"}</h1>

            <input
                value={form.nome}
                placeholder="Nome"
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />

            <input
                type="number"
                value={form.preco}
                placeholder="Preço"
                onChange={(e) => setForm({ ...form, preco: e.target.value })}
            />

            <input
                type="number"
                value={form.estoque}
                placeholder="Estoque"
                onChange={(e) => setForm({ ...form, estoque: e.target.value })}
            />

            <button type="submit">Salvar</button>
        </form>
    );
}
