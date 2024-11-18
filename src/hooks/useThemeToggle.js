// src/hooks/useThemeToggle.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for theme toggle
const ThemeToggleContext = createContext();

export const ThemeToggleProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode && localStorage.getItem("isDarkMode") === null) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeToggleContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export const useThemeToggle = () => useContext(ThemeToggleContext);
