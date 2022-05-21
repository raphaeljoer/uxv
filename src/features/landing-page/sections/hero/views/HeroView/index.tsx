import { Box, Typography } from '@mui/material';
import Glide from '@glidejs/glide';
import { useEffect } from 'react';
import Image from 'next/image';
import * as styles from './styles';

export const HeroView = () => {
  useEffect(() => {
    const glide = new Glide('#glide', {
      autoplay: 6000,
      type: 'carousel',
      startAt: 0,
      perView: 1,
      animationDuration: 1000
    });

    glide.mount();
  }, []);

  return (
    <Box sx={styles.container}>
      <Box id="glide" className="glide">
        <Box className="glide__track" data-glide-el="track">
          <Box component="ul" className="glide__slides">
            <Box component="li" className="glide__slide">
              <Box sx={styles.img}>
                <Typography variant="h1" sx={styles.title}>
                  Current Solution diagnosis
                </Typography>
                <Typography sx={styles.subTitle}>for Digital Health</Typography>
                <Image
                  priority
                  src="/features/landing-page/hero/b1-vector.svg"
                  alt="b1"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center bottom"
                />
              </Box>
            </Box>
            <Box component="li" className="glide__slide">
              <Box
                sx={Object.assign(styles.img, {
                  minHeight: { sm: 360, md: 480, lg: 560, xl: 600 }
                })}
              >
                <Typography variant="h1" sx={styles.title2}>
                  User research
                </Typography>
                <Typography sx={styles.subTitle2}>
                  for Digital Health
                </Typography>
                <Image
                  priority
                  src="/features/landing-page/hero/b2-vector.svg"
                  alt="b1"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center bottom"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
