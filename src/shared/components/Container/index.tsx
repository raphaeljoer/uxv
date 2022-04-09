import { Box } from '@mui/material';
import { StyleProps } from 'shared/types/style-props';
import * as styles from './styles';

type Props = {
  children: React.ReactNode;
  sx?: StyleProps;
  sxContent?: StyleProps;
};

export const Container = ({ children, sx, sxContent }: Props) => {
  const containerStyles = { ...styles.container, ...sx };
  const contentStyles = { ...styles.content, ...sxContent };
  return (
    <Box sx={containerStyles}>
      <Box sx={contentStyles}>{children}</Box>
    </Box>
  );
};
