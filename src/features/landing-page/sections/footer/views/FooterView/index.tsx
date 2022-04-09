import { Box, IconButton, Link, Typography } from '@mui/material';
import { RiLinkedinFill } from 'react-icons/ri';
import { Container } from 'shared/components/Container';
import * as styles from './styles';

export const FooterView = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.grid}>
        <Box>
          <Typography variant="h1" mb={1}>
            UXVolution
          </Typography>
          <Typography maxWidth={288}>
            Empowering Healthcare Projects with User Centered Design
          </Typography>
        </Box>
        <span />
        <Box sx={styles.info}>
          <Typography maxWidth={288}>E-mail: info@uxvolution.com </Typography>
          <Link href="http://google.com" target="_blank">
            <IconButton
              aria-label="linkedin"
              color="primary"
              size="medium"
              sx={styles.button}
            >
              <RiLinkedinFill />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box sx={styles.copyright}>
        <Typography maxWidth={288}>Copyright 2022 UXVolution LTDA</Typography>
      </Box>
    </Container>
  );
};
