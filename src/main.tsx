import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MDXProvider } from "@mdx-js/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { components, theme } from "./styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MDXProvider components={components}>
          <App />
        </MDXProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
