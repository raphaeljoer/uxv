import { Box, Grid, Typography } from '@mui/material';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import * as styles from './styles';
import { Container } from 'shared/components/Container';
import { Underline } from 'shared/components/Underline';

export const WhySectionView = () => {
  return (
    <Container>
      <Grid sx={styles.section}>
        <Box sx={styles.article}>
          <Typography variant="h2" sx={styles.why} maxWidth={288}>
            {`Why do we focus on the `}
            <Underline>health area</Underline>
            {`?`}
          </Typography>
        </Box>
        <Box sx={styles.article}>
          <PersonSearchOutlinedIcon sx={styles.icon} />
          <Typography variant="h5" sx={styles.title}>
            {`Health for all`}
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            {`We are committed to using the potential of technology to transform
            all lives in a positive way. We know the importance of health,
            because it relates to improving people's quality of life and we want
            to break boundaries to reach the maximum people. This means working
            worldwide, without any space, culture and societal barriers.`}
          </Typography>
        </Box>
        <Box sx={styles.article}>
          <HealthAndSafetyOutlinedIcon sx={styles.icon} />
          <Typography variant="h5" sx={styles.title}>
            {`Design makes the difference at eHealth`}
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            {`We believe that from a mindset that unifies design and
              entrepreneurship, we can explore the latent opportunities to use
              technology and services in the area of digital health to impact
              the daily lives of users.`}
          </Typography>
        </Box>
        <Box sx={styles.article}>
          <ConnectWithoutContactOutlinedIcon sx={styles.icon} />
          <Typography variant="h5" sx={styles.title}>
            {`Create synergy between industry and university`}
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            {`Our professionals have experience in different businesses in the
            industrial sector, in addition to a vast academic research career.
            We believe that this diversity allows us to bring confidence and
            foundation to propose technology in health.`}
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
};
