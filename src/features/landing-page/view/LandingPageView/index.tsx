import { Box } from '@mui/material';
import { Team } from 'features/landing-page/components/Team';
import { WhySection } from 'features/landing-page/components/WhySection';
import * as styles from './styles';

export const LandingPageView = () => {
  return (
    <Box sx={styles.container}>
      <WhySection />
      <Team />
    </Box>
  );
};
