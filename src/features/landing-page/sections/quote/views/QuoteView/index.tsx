import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import * as styles from './styles';
import { Container } from 'shared/components/Container';

export const QuoteView = () => {
  return (
    <Container sx={styles.superContainer} sxContent={styles.superContent}>
      <Box sx={styles.quote}>
        <FormatQuoteIcon sx={styles.icon} />
        <Typography variant="h3" sx={{ ml: 1.5 }}>
          We want to revolutionize the way of thinking about health to deliver
          excellence
        </Typography>
      </Box>
    </Container>
  );
};
