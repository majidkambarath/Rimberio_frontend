import React, { useEffect } from "react";
import Head from "./Head";
import Grid from "./Grid";
import ProductList from "./ProductList";
import FooterDiv from "../common/Footer";
import  CarouselNavigate  from "./Carousel";
import DatesLisit from "./DatesLisit";
export default function LandingPage() {
  
  return (
    <>
      <CarouselNavigate/>
      {/* <Head /> */}
      <DatesLisit />
      {/* <ProductList /> */}
      <FooterDiv />
    </>
  );
}
