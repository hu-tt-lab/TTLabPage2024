import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MDXProvider } from "@mdx-js/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles";
import { NavOpenContextProvider, mdxComponents } from "./components/layout";
import { LangContextProvider } from "./components/language/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LangContextProvider>
          <NavOpenContextProvider>
            <MDXProvider components={mdxComponents}>
              <App />
            </MDXProvider>
          </NavOpenContextProvider>
        </LangContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
