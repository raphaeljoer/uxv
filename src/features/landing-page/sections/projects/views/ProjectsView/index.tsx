import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Container } from 'shared/components/Container';
import * as styles from './styles';

export const ProjectsView = () => {
  return (
    <Container>
      <Box sx={styles.header}>
        <Typography variant="h6" sx={styles.upTitle}>
          Design how it should really be done
        </Typography>
        <Typography variant="h2" sx={styles.title}>
          Empowering users with amazing projects
        </Typography>
      </Box>
      <Box sx={styles.grid}>
        <Box sx={styles.project}>
          <Box sx={styles.projectImage}>
            <Image
              src="/features/landing-page/assets/covive-logo.png"
              width={232}
              height={100}
              alt="Covive"
              layout="fixed"
              objectPosition="center"
            />
          </Box>
          <Typography variant="h6" sx={styles.projectTitle}>
            CoVIVE Social
          </Typography>
          <Typography variant="body1" sx={styles.projectDescription}>
            CoVIVE is an initiative to use digital information technology to
            improve the quality of the relationship between the Hospital, Social
            Service, Multidisciplinary Team, Patients and Families.
          </Typography>
        </Box>
        <Box sx={styles.project}>
          <Box sx={styles.projectImage}>
            <Image
              src="/features/landing-page/assets/gisbot-logo.png"
              width={282}
              height={100}
              alt="GISBOT"
              layout="fixed"
            />
          </Box>
          <Typography variant="h6" sx={styles.projectTitle}>
            Gisbot
          </Typography>
          <Typography variant="body1" sx={styles.projectDescription}>
            Gisbot is a chatbot application to give 100% reliable health
            guidance to pregnant women, especially regarding questions,
            guidance, help with symptoms, etc.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
