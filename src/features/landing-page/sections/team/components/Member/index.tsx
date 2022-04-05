import { Box, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import { Member as MemberProps } from '../../types/member';
import * as styles from './styles';

type Props = MemberProps;

export const Member = ({ name, position, image, socials }: Props) => {
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
