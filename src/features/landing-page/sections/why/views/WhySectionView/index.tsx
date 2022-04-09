import { Box, Grid, Typography } from '@mui/material';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import * as styles from './styles';
import { Container } from 'shared/components/Container';

export const WhySectionView = () => {
  return (
    <Container>
      <Grid sx={styles.section}>
        <Box sx={styles.article}>
          <Typography variant="h2" sx={styles.why} maxWidth={288}>
            Why do we focus on the health area?
          </Typography>
        </Box>
        <Box sx={styles.article}>
          <HealthAndSafetyOutlinedIcon sx={styles.icon} />
          <Typography variant="h5" sx={styles.title}>
            Design makes the difference at eHealth
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            We believe that from a mindset that unifies design and
            entrepreneurship, we can explore the latent opportunities to use
            technology and services in the area of digital health to impact the
            daily lives of users.
          </Typography>
        </Box>
        <Box sx={styles.article}>
          <ConnectWithoutContactOutlinedIcon sx={styles.icon} />
          <Typography variant="h5" sx={styles.title}>
            Create synergy between industry and university
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            Our professionals have experience in different businesses in the
            industrial sector, in addition to a vast academic research career.
            We believe that this diversity allows us to bring confidence and
            foundation to propose technology in health.
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
};
