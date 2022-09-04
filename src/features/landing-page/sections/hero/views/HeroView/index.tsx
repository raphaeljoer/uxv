import { Box, IconButton, Typography } from '@mui/material';
import Glide from '@glidejs/glide';
import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import * as styles from './styles';
import CircleIcon from '@mui/icons-material/Circle';

export const HeroView = () => {
  useEffect(() => {
    const glide = new Glide('#glide', {
      // autoplay: 6000,
      type: 'carousel',
      startAt: 0,
      perView: 1,
      animationDuration: 1000
    });

    glide.mount();
  }, []);

  const stylesImg = useMemo(
    () => ({
      ...styles.img,
      minHeight: { sm: 360, md: 480, lg: 560, xl: 600 }
    }),
    []
  );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box id="glide" className="glide">
          <Box className="glide__track" data-glide-el="track">
            <Box component="ul" className="glide__slides">
              <Box component="li" className="glide__slide">
                <Box sx={styles.img}>
                  <Typography variant="h1" sx={styles.title}>
                    Current Solution diagnosis
                  </Typography>
                  <Typography sx={styles.subTitle}>
                    for Digital Health
                  </Typography>
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
                <Box sx={stylesImg}>
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
                    objectPosition="center top"
                  />
                </Box>
              </Box>

              <Box component="li" className="glide__slide">
                <Box sx={stylesImg}>
                  <Typography variant="h1" sx={styles.title3}>
                    Product ideation{' '}
                  </Typography>
                  <Typography sx={styles.subTitle3}>
                    for Digital Health
                  </Typography>
                  <Image
                    priority
                    src="/features/landing-page/hero/b3-vector.svg"
                    alt="b1"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center top"
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box data-glide-el="controls[nav]" sx={styles.controls}>
            <IconButton
              data-glide-dir="=0"
              className="single-bullet"
              size="small"
              sx={{
                width: 16,
                height: 16
              }}
            >
              <CircleIcon
                sx={{
                  width: 12,
                  height: 12
                }}
              />
            </IconButton>
            <IconButton
              data-glide-dir="=1"
              className="single-bullet"
              size="small"
              sx={{
                width: 16,
                height: 16
              }}
            >
              <CircleIcon
                sx={{
                  width: 12,
                  height: 12
                }}
              />
            </IconButton>
            <IconButton
              data-glide-dir="=2"
              className="single-bullet"
              size="small"
              sx={{
                width: 16,
                height: 16
              }}
            >
              <CircleIcon
                sx={{
                  width: 12,
                  height: 12
                }}
              />
            </IconButton>
          </Box>
          {/* <div className="bottom_bullets" data-glide-el="controls[nav]">
          {[0, 1].map((slide, index) => {
            return (
              <button
                key={index}
                className="single-bullet"
                data-glide-dir={'=' + index}
                />
              );
            })}
        </div> */}
        </Box>
      </Box>
    </Box>
  );
};
