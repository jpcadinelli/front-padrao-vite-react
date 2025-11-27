import Navbar from "./shared/components/Navbar/Navibar.jsx";
import Footer from "./shared/components/Footer/Footer.jsx";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
    return (
        <div className="layout">
            <Navbar />

            <main className="main-content">
                <AppRoutes />
            </main>

            <Footer />
        </div>
    );
}
