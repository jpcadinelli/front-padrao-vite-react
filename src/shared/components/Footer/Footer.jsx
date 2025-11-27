import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">© {new Date().getFullYear()} - Meu Projeto Base. Desenvolvido por:</p>
                <p className="footer-links">
                    <a href="https://github.com/jpcadinelli">@jpcadinelli</a>
                </p>
            </div>
        </footer>
    );
}
