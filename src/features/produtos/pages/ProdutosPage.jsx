import { useEffect, useState } from "react";
import { productMockService } from "../services/productMockService";
import { toast } from "./../../../shared/components/Toast/toastRef.js";
import { Link } from "react-router-dom";

export default function ProdutosPage() {
    const [produtos, setProdutos] = useState([]);

    const carregar = () => {
        productMockService.getAll().then(setProdutos);
    };

    useEffect(() => {
        carregar();
    }, []);

    const deletar = (id) => {
        productMockService.delete(id).then(() => {
            toast.success("Produto deletado!");
            carregar();
        });
    };

    return (
        <div>
            <h1>Produtos</h1>

            <Link to="/produtos/novo">
                <button>+ Novo Produto</button>
            </Link>

            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                    <th>Ações</th>
                </tr>
                </thead>

                <tbody>
                {produtos.map((p) => (
                    <tr key={p.id}>
                        <td>{p.nome}</td>
                        <td>{p.preco}</td>
                        <td>{p.estoque}</td>
                        <td>
                            <Link to={`/produtos/${p.id}`}>
                                <button>Editar</button>
                            </Link>

                            <button onClick={() => deletar(p.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
