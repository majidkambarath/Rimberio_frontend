import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Product from "../pages/Product";
export default function UserRouter() {
  return <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/product" element={<Product/>} />
   </Routes>
  
}
