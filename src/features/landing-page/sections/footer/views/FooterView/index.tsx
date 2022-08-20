import { Box, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsMedium } from 'react-icons/bs';
import { Container } from 'shared/components/Container';
import * as styles from './styles';
import { SyntheticEvent, useCallback } from 'react';

export const FooterView = () => {
  const handleClick = useCallback((e: SyntheticEvent) => {
    const link = e.currentTarget.getAttribute('data-link') as string;
    window.open(link, '_blank');
  }, []);

  return (
    <Container sx={styles.container}>
      <Box sx={styles.grid}>
        <Box sx={styles.logo}>
          <Box
            component="img"
            src="/features/landing-page/assets/uxv-logo-footer.svg"
          />
        </Box>
        <Box sx={styles.box}>
          <Typography variant="h6">Contact:</Typography>
          <Typography variant="body1">
            <Link href="mailto:info@uxvolution.com">info@uxvolution.com</Link>
          </Typography>
          <Typography variant="body1">+351 967 146 879</Typography>
        </Box>
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
        <Box sx={styles.box}>
          <Typography variant="h6">Location:</Typography>
          <Typography variant="body1">
            Madan Parque – Rua dos Inventores, 2825-182 Caparica
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.copyright}>
        <Typography maxWidth={288}>Copyright 2022 UXVolution LTDA</Typography>
      </Box>
    </Container>
  );
};
