// src/pages/HomePage.jsx
import React, { useState } from "react";
import { Box, CircularProgress, Grid2, Typography } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import Layout from "../components/Layout";
import useArticles from "../hooks/useArticles";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    source: "",
    date: "",
    category: "",
  });

  const { articles, loading } = useArticles(query, filters);

  return (
    <Layout setQuery={setQuery} setFilters={setFilters}>
      <Grid2 container spacing={2}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "100vh",
              width: "100vw",
            }}
          >
            <CircularProgress />
          </Box>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <Grid2 item size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <ArticleCard article={article} />
            </Grid2>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" sx={{ mt: 5 }}>
            No articles found. Please try a different search or adjust your
            filters.
          </Typography>
        )}
      </Grid2>
    </Layout>
  );
};

export default HomePage;
