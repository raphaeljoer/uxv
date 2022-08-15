import { Box } from '@mui/material';
import { ReactNode } from 'react';
import * as styles from './styles';

type Props = {
  children: ReactNode;
};

export const Underline = ({ children }: Props) => {
  return (
    <Box component="span" sx={styles.container}>
      {children}
    </Box>
  );
};
