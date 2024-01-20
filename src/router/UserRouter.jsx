import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Product from "../pages/Product";
import CartPage from "../pages/CartPage";
export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
