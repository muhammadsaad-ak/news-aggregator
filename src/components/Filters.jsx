// Filters.js
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid2,
} from "@mui/material";

const Filters = ({ onFilterChange }) => {
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSourceChange = (event) => {
    setSource(event.target.value);
    onFilterChange("source", event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    onFilterChange("date", event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange("category", event.target.value);
  };

  return (
    <Grid2 container spacing={2} sx={{ mb: 3 }}>
      <Grid2 item size={{ xs: 12, sm: 4 }}>
        <FormControl fullWidth>
          <InputLabel shrink>Source</InputLabel>
          <Select
            notched
            label="Source"
            value={source}
            onChange={handleSourceChange}
          >
            <MenuItem value="">All Sources</MenuItem>
            <MenuItem value="newsapi">NewsAPI</MenuItem>
            <MenuItem value="guardian">The Guardian</MenuItem>
            <MenuItem value="nyt">New York Times</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
      <Grid2 item size={{ xs: 12, sm: 4 }}>
        <TextField
          label="Filter by Date"
          type="date"
          fullWidth
          slotProps={{ inputLabel: { shrink: true } }}
          value={date}
          onChange={handleDateChange}
        />
      </Grid2>
      <Grid2 item size={{ xs: 12, sm: 4 }}>
        <FormControl fullWidth>
          <InputLabel shrink>Category</InputLabel>
          <Select
            notched
            label="Category"
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

export default Filters;
