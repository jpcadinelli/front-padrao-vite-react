import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} - Meu Projeto Base</p>
                <p className="footer-links">
                    <a href="https://github.com/jpcadinelli">Github - @jpcadinelli</a>
                </p>
            </div>
        </footer>
    );
}
