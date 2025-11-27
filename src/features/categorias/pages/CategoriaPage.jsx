import { useEffect, useState } from "react";
import { categoriasService } from "../services/categoriasService";

export default function CategoriasPage() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        categoriasService
            .listar()
            .then(setLista)
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Categorias</h1>
            {lista.map((c) => (<p key={c.id}>{c.nome}</p>))}
        </div>
    );
}
