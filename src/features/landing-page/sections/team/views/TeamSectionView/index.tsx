import { Box, Grid } from '@mui/material';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { members } from '../../data/members';
import * as styles from './styles';

export const TeamSectionView = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        <Header />
        <Grid sx={styles.members}>
          {members.map(({ name, position, image, socials }) => (
            <Member
              key={name}
              name={name}
              position={position}
              image={image}
              socials={socials}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
