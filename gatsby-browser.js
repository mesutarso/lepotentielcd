import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// import { GlobalStyle } from "./src/styles/global";
import { theme } from "./src/styles/theme";
import Layout from "./src/components/Layout/Layout";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Roboto', sans-serif !important;
    }
    .bg-primaryColor {
        background-color: ${theme.colors.primary};
    }
    .bg-secondaryColor {
        background-color: ${theme.colors.secondary};
    }
    .bg-tertiaryColor {
        background-color: ${theme.colors.tertiary};
    }
    .bg-variantColor {
        background-color: ${theme.colors.variant};
    }
    .primaryColor{
        color: ${theme.colors.primary};
    }
    .secondaryColor{
        color: ${theme.colors.secondary};
    }
    .base-button{
        background-color: ${theme.colors.primary};
        color: #fff;
        padding: 8px 19px;
        text-transform: uppercase;
        text-align: center;
    }
    .w-30{
        width:100px;
    }



`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
);
