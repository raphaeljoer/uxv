import { Box } from '@mui/material';
import { FooterView } from 'features/landing-page/sections/footer';
import { PartnersView } from 'features/landing-page/sections/partners';
import { PhotosView } from 'features/landing-page/sections/photos';
import { ProjectsView } from 'features/landing-page/sections/projects';
import { TeamSectionView } from 'features/landing-page/sections/team';
import { WhatWeBelieveView } from 'features/landing-page/sections/what-we-believe';
import { WhySectionView } from 'features/landing-page/sections/why';
import * as styles from './styles';

export const LandingPageView = () => {
  return (
    <Box sx={styles.container}>
      <WhySectionView />
      <TeamSectionView />
      <WhatWeBelieveView />
      <ProjectsView />
      <PhotosView />
      <PartnersView />
      <FooterView />
    </Box>
  );
};
