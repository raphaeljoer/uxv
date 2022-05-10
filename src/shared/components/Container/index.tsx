import { Box } from '@mui/material';
import { StylesProps } from 'shared/types/styles-props';
import * as styles from './styles';

type Props = {
  children: React.ReactNode;
  sx?: StylesProps;
  sxContent?: StylesProps;
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
