import { Pagination, Stack } from "@mui/material";
import React from "react";

interface Props {
  loading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationBar: React.FC<Props> = (props) => {
  const {loading, page, totalPages, onPageChange} = props

  return (
    <footer>
      {!loading && (
        <Stack spacing={2} sx={{ mt: 3, alignItems: 'center' }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={(_, value) => onPageChange(value)} 
            color="primary" 
            size="large"
            sx={{ 
              '& .MuiPaginationItem-root': { fontWeight: 'bold' },
              backgroundColor: 'white',
              padding: '8px 16px',
              borderRadius: '50px',
              boxShadow: 1
            }}
          />
        </Stack>
      )}
    </footer>
  )
}