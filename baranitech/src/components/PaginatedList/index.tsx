import React, { useState } from 'react';
import { Grid, Pagination, Stack } from '@mui/material';
import { PaginationStyled } from '../../pages/styles';

type PaginatedListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemsPerPage?: number;
};

function PaginatedList<T>({ items, renderItem, itemsPerPage = 8 }: PaginatedListProps<T>) {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    scrollToTop()
  };

      // Smooth scroll to top function
      const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Stack spacing={2} sx={{width: '100%'}}>
      <Grid container spacing={2}>
        {paginatedItems.map((item, index) => (
         <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            {renderItem(item, index)}
          </Grid>
        ))}
      </Grid>
      <PaginationStyled
        count={Math.ceil(items.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}

export default PaginatedList;
