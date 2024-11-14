import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ArticleCard from '../components/ArticleCard';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import {
  fetchNewsFromGuardian,
  fetchNewsFromNewsAPI,
  fetchNewsFromNYT,
} from '../services/newsService';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ source: '', date: '', category: '' });
  const [loading, setLoading] = useState(false);

  // Function to fetch articles
  const fetchFilteredArticles = async () => {
    setLoading(true);  // Setting loading to true when we start fetching
    let results = [];
    const queryToUse = query || 'latest news'; // Only define once

    try {
      if (filters.source === 'newsapi' || filters.source === '') {
        const queryToUse = query || 'undefined';
        results = await fetchNewsFromNewsAPI(queryToUse, filters.date, filters.category);
      }
      if (filters.source === 'guardian' || filters.source === '') {
        results = results.concat(await fetchNewsFromGuardian(queryToUse, filters.date, filters.category));
      }
      if (filters.source === 'nyt' || filters.source === '') {
        results = results.concat(await fetchNewsFromNYT(queryToUse, filters.date, filters.category));
      }
      setArticles(results); // Update articles state with fetched results
    } catch (error) {
      console.error('Error fetching filtered articles:', error);
      setArticles([]); // Handle errors gracefully
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // Fetch default articles on initial load
  useEffect(() => {
    fetchFilteredArticles();
  }, []);

  // Fetch articles when search query or filters change
  useEffect(() => {
    fetchFilteredArticles(query);
  }, [query, filters]); // Dependency array to trigger when query or filters change

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
