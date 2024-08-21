import React from "react";
import FooterTop from "../../includes/FooterTop";
import ProductCard from "../../includes/TopProducts.jsx";
import GroceyishApp from "../../includes/Applink.jsx";
import MainPage from "../../includes/MainPage.jsx";
export default function Home() {
  return (
    <>
      <MainPage/>
      <ProductCard/>
      <GroceyishApp/>
      <FooterTop />
    </>
  );
}
