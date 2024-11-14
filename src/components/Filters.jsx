import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, TextField } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  return (
    <Box display="flex" gap={2} sx={{ mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel>Source</InputLabel>
        <Select
          defaultValue=""
          label="Source"
          onChange={(e) => onFilterChange('source', e.target.value)}
        >
          <MenuItem value="">All Sources</MenuItem>
          <MenuItem value="newsapi">NewsAPI</MenuItem>
          <MenuItem value="guardian">The Guardian</MenuItem>
          <MenuItem value="nyt">New York Times</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        type="date"
        label="Filter by Date"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => onFilterChange('date', e.target.value)}
      />
    </Box>
  );
};

export default Filters;
