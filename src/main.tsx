import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
