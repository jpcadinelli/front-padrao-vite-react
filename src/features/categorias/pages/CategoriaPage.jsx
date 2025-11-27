import { useEffect, useState } from "react";
import { categoriasService } from "../services/categoriasService";
import { Link } from "react-router-dom";

export default function CategoriasPage() {
    const [categorias, setCategorias] = useState([]);

    const carregar = () => {
        categoriasService.listar()
            .then((res) => setCategorias(res.data))
            .catch(() => {});
    };

    useEffect(() => {
        carregar();
    }, []);

    const excluir = (id) => {
        if (!confirm("Deseja realmente excluir esta categoria?")) return;

        categoriasService.deletar(id).then(() => {
            carregar();
        });
    };

    return (
        <div>
            <h1>Categorias</h1>

            <Link to="/categorias/nova">
                <button>+ Nova Categoria</button>
            </Link>

            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {categorias.map((cat) => (
                    <tr key={cat.id}>
                        <td>{cat.nome}</td>

                        <td>
                            <Link to={`/categorias/${cat.id}`}>
                                <button>Editar</button>
                            </Link>

                            <button onClick={() => excluir(cat.id)}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
