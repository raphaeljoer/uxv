import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  bgcolor: 'white',
  position: 'relative',
  pb: 20
};

export const bg: StylesProps = {
  position: 'absolute',
  bottom: 32
};

export const grid: StylesProps = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  width: '100%',
  gap: 4
};

export const header: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: '100%',
  gap: 2
};

export const title: StylesProps = {
  maxWidth: 340,
  textAlign: { xs: 'center', md: 'left' }
};

export const description: StylesProps = {
  maxWidth: 320,
  textAlign: { xs: 'center', md: 'left' }
};

export const brands: StylesProps = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  alignContent: 'center',
  justifyContent: 'center',
  justifyItems: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  justifySelf: 'center',
  width: '100%',
  gridGap: { xs: 32, md: 24 }
};
