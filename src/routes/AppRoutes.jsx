import { Routes, Route } from "react-router-dom";

import HomePage from "./../features/home/pages/HomePage";
import CategoriasPage from "../features/categorias/pages/CategoriaPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categorias" element={<CategoriasPage />} />
    </Routes>
  );
}
