import { Box, Typography } from '@mui/material';
import * as styles from './styles';
import { Highlight } from '../../components/Highlight';
import { highlights } from '../../data/highlights';

export const WhatWeBelieveView = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box sx={styles.header}>
          <Typography variant="h6">Our way of working</Typography>
          <Typography variant="h2">What we believe...</Typography>
        </Box>
        <Box sx={styles.grid}>
          {highlights.map((highlight) => (
            <Highlight key={highlight.title} {...highlight} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
