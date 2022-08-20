import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  bgcolor: 'background.paper'
};

export const content: StylesProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: 4
};

export const logo: StylesProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'center', md: 'flex-start' }
};

export const box: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  gap: 0.5,
  textAlign: { xs: 'center', md: 'left' }
};

export const grid: StylesProps = {
  color: 'white',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: { xs: '1fr', md: '1fr 180px 180px 180px' },
  rowGap: 3,
  gap: 2,
  alignItems: 'center'
};

export const button: StylesProps = {
  border: '1px solid'
};

export const social: StylesProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: 2
};

export const icon: StylesProps = {
  color: 'white',
  border: '1px solid',
  borderColor: 'grey.300'
};

export const copyright: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  pt: 8,
  color: 'white'
};
