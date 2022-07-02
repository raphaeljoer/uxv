import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  display: 'grid',
  gridTemplateColumns: { lg: '1fr 2fr', md: '1fr' },
  gap: 12,
  rowGap: 4,
  width: '100%',
  height: '100%',
  pt: 12,
  pb: { lg: 48, md: 12 }
};

export const start: StylesProps = {};

export const grid: StylesProps = {
  display: 'grid',
  gridTemplateColumns: {
    lg: '1fr 1fr',
    md: '1fr 1fr',
    sm: '1fr'
  },
  gap: 3
};

export const box: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  border: '1px solid',
  borderColor: 'grey.300',
  borderRadius: 3,
  p: 3,
  bgcolor: 'white'
};

export const bg: StylesProps = {
  display: { lg: 'block', xs: 'none' },
  position: 'absolute',
  bottom: { lg: -300, md: -400 },
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1
};
