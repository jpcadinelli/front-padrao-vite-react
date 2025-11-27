import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2>Meu Projeto Base</h2>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categorias">Categorias</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
            </ul>
        </nav>
    );
}
