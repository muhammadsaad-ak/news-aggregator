// src/components/Layout.jsx
import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import { useThemeToggle } from "../hooks/useThemeToggle";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Layout = ({ children, setQuery, setFilters }) => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">News Aggregator</Typography>
        <IconButton onClick={toggleTheme} sx={{ color: "text.primary" }}>
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
      <SearchBar onSearch={setQuery} />
      <Filters
        onFilterChange={(type, value) =>
          setFilters((prev) => ({ ...prev, [type]: value }))
        }
      />
      {children}
    </Container>
  );
};

export default Layout;
