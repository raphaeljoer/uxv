import { Box } from '@mui/material';
import { TeamSectionView } from 'features/landing-page/sections/team';
import { WhySectionView } from 'features/landing-page/sections/why';
import * as styles from './styles';

export const LandingPageView = () => {
  return (
    <Box sx={styles.container}>
      <WhySectionView />
      <TeamSectionView />
    </Box>
  );
};