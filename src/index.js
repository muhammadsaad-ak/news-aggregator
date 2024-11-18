// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme";
import { ThemeToggleProvider, useThemeToggle } from "./hooks/useThemeToggle";

const Main = () => {
  const { isDarkMode } = useThemeToggle();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeToggleProvider>
    <Main />
  </ThemeToggleProvider>
);
