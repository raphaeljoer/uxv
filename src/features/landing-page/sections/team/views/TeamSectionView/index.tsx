import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import { FaOrcid } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { Container } from 'shared/components/Container';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import Image from 'next/image';
import { members } from '../../data/members';
import * as styles from './styles';
import { MemberAdvisoryBoard } from '../../components/MemberAdvisoryBoard';
import { memberAdvisoryBoard } from '../../data/memberAdvisoryBoard';

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
        <Box sx={styles.advisoryBoard}>
          <Typography variant="h3" color="white" sx={styles.advisoryBoardTitle}>
            Advisory Board
          </Typography>
          <Box sx={styles.advisoryBoardMembers}>
            {memberAdvisoryBoard.map((member) => (
              <MemberAdvisoryBoard key={member.image} {...member} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
