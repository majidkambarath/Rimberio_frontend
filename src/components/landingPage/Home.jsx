import React from "react";
import Head from "./Head";
import Grid from "./Grid";
import ProductList from "./ProductList";
import FooterDiv from "../common/Footer";

export default function LandingPage() {
  return (
    <>
      <Head />
      <Grid />
      <ProductList />
      <FooterDiv />
    </>
  );
}
