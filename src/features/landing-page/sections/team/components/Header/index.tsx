import { Box, Typography } from '@mui/material';
import { Underline } from 'shared/components/Underline';
import * as styles from './styles';

export const Header = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h2" sx={styles.title}>
        A team of <Underline>exceptional people</Underline>
      </Typography>
      <Typography sx={styles.description}>
        To build complete solutions a team of dedicated and diverse people is
        needed, believing in the same purpose
      </Typography>
    </Box>
  );
};
