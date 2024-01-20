import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CartPage from "../pages/CartPage";
export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
