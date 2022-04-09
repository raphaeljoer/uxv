import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  width: '100%',
  bgcolor: 'background.paper',
  justifyContent: 'center'
};
export const section: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 1440,
  width: '100%',
  my: 8,
  px: 2,
  rowGap: 8
};

export const members: StyleProps = {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr',
    lg: '1fr 1fr 1fr 1fr'
  },
  gridAutoColumns: 'auto',
  justifyItems: 'center',
  gap: 2
};
