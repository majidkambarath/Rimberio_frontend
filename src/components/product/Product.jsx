import React from "react";
import Head from "../common/Navbar";
import Footer from "../common/Footer";
import Lists from "./Lists";
import SiderBar from "./SiderBar";
export default function ProductList() {
  return (
    <>
      <Head />
      <div className="flex">
        <SiderBar />
      <Lists />
      </div>
     <Footer/>
    </>
  );
}
