import React, { useState } from 'react';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ArticleCard from '../components/ArticleCard';
import useArticles from '../hooks/useArticles';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ source: '', date: '', category: '' });
  
  const { articles, loading } = useArticles(query, filters);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        News Aggregator
      </Typography>
      <SearchBar onSearch={setQuery} />
      <Filters onFilterChange={(type, value) => setFilters((prev) => ({ ...prev, [type]: value }))} />
      <Grid container spacing={2}>
        {loading ? (
         <Box
         sx={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           position: 'absolute',   // Make it absolutely positioned
           top: '50%',              // Move it down 50% of the viewport height
           left: '50%',             // Move it right 50% of the viewport width
           transform: 'translate(-50%, -50%)', // Center the element exactly
           height: '100vh',         // Ensure it takes full viewport height
           width: '100vw',          // Ensure it takes full viewport width
         }}
       >
         <CircularProgress />
       </Box>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ArticleCard article={article} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" sx={{ mt: 5 }}>
            No articles found. Please try a different search or adjust your filters.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
