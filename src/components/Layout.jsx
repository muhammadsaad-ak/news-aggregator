// src/components/Layout.jsx
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Layout = ({ children, setQuery, setFilters }) => {
  return (
    <Container>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">News Aggregator</Typography>
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
