import { Box, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import type { IMemberAdvisoryBoard } from '../../types/memberAdvisoryBoard';
import * as styles from './styles';

type Props = IMemberAdvisoryBoard;

export const MemberAdvisoryBoard = ({
  image,
  name,
  position,
  socials
}: Props) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.image}>
        <Image
          src={image}
          objectFit="cover"
          layout="fill"
          width={145}
          height={145}
        />
      </Box>
      <Box sx={styles.infoContainer}>
        <Typography variant="h4" sx={styles.name}>
          {name}
        </Typography>
        <Typography variant="body2" sx={styles.name}>
          {position}
        </Typography>
        <Box sx={styles.socialContainer}>
          {socials.map(({ url, icon }) => (
            <Link key={url} href={url} target="_blank">
              <IconButton
                color="primary"
                size="medium"
                sx={{ border: '1px solid' }}
              >
                {icon}
              </IconButton>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
