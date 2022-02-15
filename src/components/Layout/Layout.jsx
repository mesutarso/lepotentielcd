import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { theme } from "../../styles/theme";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Seo />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
