import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import * as styles from './styles';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaOrcid } from 'react-icons/fa';

type Props = {
  name: string;
  position: string;
  image: string;
};

export const Member = ({ name, position, image }: Props) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.image}>
        <Image src={image} alt={name} objectFit="cover" layout="fill" />
      </Box>
      <Typography variant="h4" sx={styles.name}>
        {name}
      </Typography>
      <Typography sx={styles.position}>{position}</Typography>
      <Box sx={styles.socials}>
        <IconButton
          aria-label="linkedin"
          color="secondary"
          size="medium"
          sx={styles.button}
        >
          <RiLinkedinFill />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          color="secondary"
          size="medium"
          sx={styles.button}
        >
          <FaOrcid />
        </IconButton>
      </Box>
    </Box>
  );
};
