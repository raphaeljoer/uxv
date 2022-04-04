import { Box } from '@mui/material';
import { WhySection } from 'features/landing-page/components/WhySection';
import * as styles from './styles';

export const LandingPageView = () => {
  return (
    <Box sx={styles.container}>
      <WhySection />
    </Box>
  );
};
