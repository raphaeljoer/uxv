import { StylesProps } from 'shared/types/styles-props';

export const header: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%'
};

export const upTitle: StylesProps = {
  color: 'secondary.main',
  mb: 1,
  width: '100%',
  textAlign: { xs: 'center', md: 'left' }
};

export const title: StylesProps = {
  color: 'black',
  textAlign: { xs: 'center', md: 'left' }
};

export const grid: StylesProps = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(288px, 1fr))',
  width: '100%',
  py: 10,
  gridGap: { xs: 56, md: 32 }
};

export const project: StylesProps = {
  display: 'flex',
  flexDirection: 'column'
};

export const projectImage: StylesProps = {
  position: 'relative',
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-start' },
  alignItems: { xs: 'center', md: 'flex-start' }
};

export const projectTitle: StylesProps = {
  mt: 3,
  mb: 2,
  textAlign: { xs: 'center', md: 'left' }
};

export const projectDescription: StylesProps = {
  maxWidth: 560,
  textAlign: { xs: 'center', md: 'left' }
};
