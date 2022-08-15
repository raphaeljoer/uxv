import { Box, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { Member as MemberProps } from '../../types/member';
import * as styles from './styles';

type Props = MemberProps;

export const Member = ({
  name,
  position,
  image,
  imageOverlay,
  socials
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={styles.container}>
      <Box
        id="image-box"
        sx={styles.image}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <Box component="img" src={imageOverlay} sx={styles.overlay} />
        )}
        <Image src={image} alt={name} objectFit="cover" layout="fill" />
      </Box>
      <Typography variant="h4" sx={styles.name}>
        {name}
      </Typography>
      <Typography sx={styles.position}>{position}</Typography>
      <Box sx={styles.socials}>
        {socials.map(({ name, url, icon }) => (
          <Link href={url} key={name} target="_blank">
            <IconButton
              aria-label={name}
              color="primary"
              size="medium"
              sx={styles.button}
            >
              {icon}
            </IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
