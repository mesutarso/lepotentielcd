import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";
import { GlobalStyle } from "../../styles/global";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <Header />
      {children}
      <Footer />
    </>
  );
}
