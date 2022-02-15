import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      {children}
      <Footer />
    </>
  );
}
