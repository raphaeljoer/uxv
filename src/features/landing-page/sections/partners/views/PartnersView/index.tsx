import { Box, Grid, Typography } from '@mui/material';
import { Container } from 'shared/components/Container';
import { partners } from '../../data/partners';
import * as styles from './styles';

export const PartnersView = () => {
  return (
    <Container sx={{ bgcolor: 'white' }}>
      <Grid sx={styles.grid}>
        <Box id="partner-header" sx={styles.header}>
          <Typography variant="h2" sx={styles.title}>
            Partners in health challenges
          </Typography>
          <Typography sx={styles.description}>
            We were able to connect with the Brazilian and Portuguese market
            through partnerships within the health and innovation ecosystem
          </Typography>
        </Box>
        <Grid sx={styles.brands}>
          {partners.map(({ src, name }) => (
            <Box
              key={src}
              component="img"
              src={src}
              alt={name}
              loading="lazy"
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
