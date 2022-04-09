import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { photos } from '../../data/photos';
import * as styles from './styles';

export const PhotosView = () => {
  return (
    <Grid sx={styles.grid}>
      {photos.map(({ src, title }) => (
        <Box sx={styles.image} key={src}>
          <Image src={src} alt={title} layout="fill" objectFit="cover" />
        </Box>
      ))}
    </Grid>
  );
};
