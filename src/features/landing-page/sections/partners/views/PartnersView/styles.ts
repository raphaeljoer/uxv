import { StyleProps } from 'shared/types/style-props';

export const grid: StyleProps = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  width: '100%',
  gap: 4
};

export const header: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: '100%',
  gap: 2
};

export const title: StyleProps = {
  maxWidth: 340,
  textAlign: { xs: 'center', md: 'left' }
};

export const description: StyleProps = {
  maxWidth: 320,
  textAlign: { xs: 'center', md: 'left' }
};

export const brands: StyleProps = {
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
