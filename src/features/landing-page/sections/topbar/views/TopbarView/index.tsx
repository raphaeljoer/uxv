import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import { Container } from 'shared/components/Container';
import { BsMedium } from 'react-icons/bs';
import * as styles from './styles';

export const TopbarView = () => {
  return (
    <Container sx={styles.superContainer} sxContent={styles.superContent}>
      <Box sx={styles.container}>
        <Box sx={styles.logo}>
          <Image
            src="/features/landing-page/assets/uxv-logo.svg"
            alt="uxv logo"
            objectFit="cover"
            layout="fill"
            priority
          />
        </Box>
        <Box sx={styles.social}>
          <IconButton
            sx={{
              color: 'black',
              border: '1px solid',
              borderColor: 'grey.300'
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              color: 'black',
              border: '1px solid',
              borderColor: 'grey.300'
            }}
          >
            <BsMedium />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};
