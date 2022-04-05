import { Box, Grid } from '@mui/material';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import * as styles from './styles';

export const TeamSectionView = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        <Header />
        <Grid sx={styles.members}>
          <Member
            name="Claudia Pernencar"
            position="Co-Founder, UX/UI Consultant & Researcher"
            image="/features/landing-page/team/claudia.jpg"
          />
          <Member
            name="Inga Saboia"
            position="Co-Founder, UX/UI Consultant & Research"
            image="/features/landing-page/team/inga.jpg"
          />
          <Member
            name="Deivith Oliveira"
            position="Co-Founder & Digital Product Manager"
            image="/features/landing-page/team/deivith.jpg"
          />
          <Member
            name="Rafaelly Freitas"
            position="Product Designer & System Analyst"
            image="/features/landing-page/team/rafa.jpg"
          />
        </Grid>
      </Box>
    </Box>
  );
};
