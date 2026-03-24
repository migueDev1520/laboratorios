import React from 'react';
import { Button, Paper, TextField } from '@mui/material';

interface Props {
  filter: string;
  onFilterChange: (value: string) => void;
  onSearch: () => void;
  loading: boolean;
}

export const SearchToolbar: React.FC<Props> = (props) => {
  const { filter, onFilterChange, onSearch, loading } = props;

  return (
    <nav>
      <Paper className="search-container" elevation={0} variant="outlined">
        <TextField
          label="Organization"
          variant="outlined"
          size="small"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
        <Button
          variant="contained" 
          onClick={onSearch}
          disabled={loading} 
          sx={{ px: 4, borderRadius: '8px', textTransform: 'none' }}
        >
          Search
        </Button>
      </Paper>
    </nav>
  )
}