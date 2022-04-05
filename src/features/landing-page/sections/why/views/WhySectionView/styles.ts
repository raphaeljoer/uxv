import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 432
};
export const section: StyleProps = {
  display: 'grid',
  gridTemplateColumns: { md: '1fr 1fr 1fr', xs: '1fr' },
  gridTemplateRows: { xs: '200px 1fr 1fr', md: '1fr' },
  maxWidth: 1440,
  m: { xs: 2, md: 0 },
  gap: 3
};
export const article: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: 2
};
export const why: StyleProps = {
  maxWidth: 288,
  fontSize: 40,
  fontWeight: 700
};

export const title: StyleProps = {
  fontWeight: 700,
  marginBottom: 1,
  maxWidth: 288
};

export const description: StyleProps = {
  maxWidth: 360
};

export const icon: StyleProps = {
  fontSize: 56,
  color: 'secondary.main',
  mb: 2
};
