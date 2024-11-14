// Filters.js
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSourceChange = (event) => {
    setSource(event.target.value);
    onFilterChange('source', event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    onFilterChange('date', event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange('category', event.target.value);
  };

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>Source</InputLabel>
          <Select value={source} onChange={handleSourceChange}>
            <MenuItem value="">All Sources</MenuItem>
            <MenuItem value="newsapi">NewsAPI</MenuItem>
            <MenuItem value="guardian">The Guardian</MenuItem>
            <MenuItem value="nyt">New York Times</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Filter by Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={handleDateChange}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={handleCategoryChange}>
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filters;
