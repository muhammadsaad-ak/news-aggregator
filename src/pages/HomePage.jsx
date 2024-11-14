import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ArticleCard from '../components/ArticleCard';
import { Container, Grid, Typography } from '@mui/material';
import {
  fetchNewsFromNewsAPI,
  fetchNewsFromGuardian,
  fetchNewsFromNYT,
} from '../services/newsService';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ source: '', date: '' });

  const fetchArticles = async () => {
    let results = [];

    if (filters.source === 'newsapi' || filters.source === '') {
      results = await fetchNewsFromNewsAPI(query);
    }
    if (filters.source === 'guardian' || filters.source === '') {
      results = results.concat(await fetchNewsFromGuardian(query));
    }
    if (filters.source === 'nyt' || filters.source === '') {
      results = results.concat(await fetchNewsFromNYT(query));
    }

    setArticles(results);
  };

  useEffect(() => {
    if (query) fetchArticles();
  }, [query, filters]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>
        News Aggregator
      </Typography>
      <SearchBar onSearch={setQuery} />
      <Filters onFilterChange={(key, value) => setFilters({ ...filters, [key]: value })} />
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
