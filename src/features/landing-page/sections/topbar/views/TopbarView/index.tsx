import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import { Container } from 'shared/components/Container';
import { BsMedium } from 'react-icons/bs';
import * as styles from './styles';
import { SyntheticEvent, useCallback } from 'react';

export const TopbarView = () => {
  const handleClick = useCallback((e: SyntheticEvent) => {
    const link = e.currentTarget.getAttribute('data-link') as string;
    window.open(link, '_blank');
  }, []);

  return (
    <Container sx={styles.superContainer} sxContent={styles.superContent}>
      <Box sx={styles.container}>
        <Image
          src="/features/landing-page/assets/uxv-logo.svg"
          alt="uxv logo"
          layout="fixed"
          width={239}
          height={42}
          priority
        />
        <Box sx={styles.social}>
          <IconButton
            onClick={handleClick}
            data-link="https://www.linkedin.com/company/uxvolution/"
            sx={styles.icon}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={handleClick}
            data-link="https://medium.com/uxvolution "
            sx={styles.icon}
          >
            <BsMedium />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};
