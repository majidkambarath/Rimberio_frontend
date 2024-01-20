import React from "react";
import Head from "../components/common/Header";
import Footer from "../components/common/Footer";
import Carts from "../components/cart/Carts";
import Payment from "../components/cart/payment";
export default function CartPage() {
  return (
    <div>
      <Head />
      <div className="flex">
        <Carts />
        <Payment />
      </div>

      <Footer />
    </div>
  );
}
