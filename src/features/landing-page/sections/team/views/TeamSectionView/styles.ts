import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  bgcolor: 'background.paper'
};
export const section: StylesProps = {
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

export const members: StylesProps = {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr',
    lg: '1fr 1fr 1fr'
  },
  gridAutoColumns: 'auto',
  justifyItems: 'center',
  gap: 2
};

export const advisoryBoard: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
};

export const advisoryBoardTitle: StylesProps = {
  textAlign: 'center',
  width: '100%',
  mb: 8
};

export const advisoryBoardMembers: StylesProps = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr'
  },
  gap: 2,
  width: '100%',
  maxWidth: 800,
  mx: 'auto'
};
