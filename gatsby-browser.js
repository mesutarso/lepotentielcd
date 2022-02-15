import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles/theme";
import Layout from "./src/components/Layout/Layout";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>
  </ThemeProvider>
);
