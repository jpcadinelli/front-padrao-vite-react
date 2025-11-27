import { Routes, Route } from "react-router-dom";

import HomePage from "./../features/home/pages/HomePage";
import CategoriasPage from "../features/categorias/pages/CategoriaPage";
import CategoriaFormPage from "../features/categorias/pages/CategoriaFormPage";
import ProdutosPage from "../features/produtos/pages/ProdutosPage";
import ProdutoFormPage from "../features/produtos/pages/ProdutoFormPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categorias" element={<CategoriasPage />} />
      <Route path="/categorias/nova" element={<CategoriaFormPage />} />
      <Route path="/categorias/:id" element={<CategoriaFormPage />} />
      <Route path="/produtos" element={<ProdutosPage />} />
      <Route path="/produtos/novo" element={<ProdutoFormPage />} />
      <Route path="/produtos/:id" element={<ProdutoFormPage />} />
    </Routes>
  );
}
