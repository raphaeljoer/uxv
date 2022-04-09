import { Box } from '@mui/material';
import { StyleProps } from 'shared/types/style-props';
import * as styles from './styles';

type Props = {
  children: React.ReactNode;
  sx?: StyleProps;
};

export const Container = ({ children, sx }: Props) => {
  const containerStyles = { ...styles.container, ...sx };
  return (
    <Box sx={containerStyles}>
      <Box sx={styles.content}>{children}</Box>
    </Box>
  );
};
