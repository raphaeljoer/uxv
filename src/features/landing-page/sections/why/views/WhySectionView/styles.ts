import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 432
};
export const section: StylesProps = {
  display: 'grid',
  gridTemplateColumns: { md: '1fr 1fr 1fr', xs: '1fr' },
  gridTemplateRows: { xs: '200px 1fr 1fr', md: '1fr' },
  alignContent: 'space-between',
  justifyContent: 'space-between',
  m: { xs: 2, md: 0 },
  maxWidth: 1440,
  width: '100%'
};
export const article: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: { xs: 'center', md: 'flex-start' },
  width: '100%'
};
export const why: StylesProps = {
  fontSize: 40,
  fontWeight: 700,
  textAlign: { xs: 'center', md: 'left' }
};

export const title: StylesProps = {
  maxWidth: 288,
  fontWeight: 700,
  marginBottom: 1
};

export const description: StylesProps = {
  maxWidth: 360
};

export const icon: StylesProps = {
  fontSize: 56,
  color: 'secondary.main',
  mb: 2
};
