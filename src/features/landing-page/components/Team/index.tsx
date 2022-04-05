import { Box, Typography } from '@mui/material';
import * as styles from './styles';

export const Team = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        <Typography variant="h2" sx={styles.title}>
          A team of exceptional people
        </Typography>
        <Typography sx={styles.description}>
          To build complete solutions a team of dedicated and diverse people is
          needed, believing in the same purpose
        </Typography>
      </Box>
    </Box>
  );
};
