import { Box, Grid } from '@mui/material';
import { Container } from 'shared/components/Container';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { members } from '../../data/members';
import * as styles from './styles';

export const TeamSectionView = () => {
  return (
    <Container sx={styles.container} sxContent={{ pt: 8, pb: 2 }}>
      <Box sx={styles.section}>
        <Header />
        <Grid sx={styles.members}>
          {members.map(({ name, position, image, imageOverlay, socials }) => (
            <Member
              key={name}
              name={name}
              position={position}
              image={image}
              imageOverlay={imageOverlay}
              socials={socials}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
