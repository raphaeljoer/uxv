import { StyleProps } from 'shared/types/style-props';

export const header: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%'
};

export const upTitle: StyleProps = {
  color: 'secondary.main',
  mb: 1,
  width: '100%',
  textAlign: { xs: 'center', md: 'left' }
};

export const title: StyleProps = {
  color: 'black',
  textAlign: { xs: 'center', md: 'left' }
};

export const grid: StyleProps = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(288px, 1fr))',
  width: '100%',
  py: 10,
  gridGap: { xs: 56, md: 32 }
};

export const project: StyleProps = {
  display: 'flex',
  flexDirection: 'column'
};

export const projectImage: StyleProps = {
  position: 'relative',
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-start' },
  alignItems: { xs: 'center', md: 'flex-start' }
};

export const projectTitle: StyleProps = {
  mt: 3,
  mb: 2,
  textAlign: { xs: 'center', md: 'left' }
};

export const projectDescription: StyleProps = {
  maxWidth: 560,
  textAlign: { xs: 'center', md: 'left' }
};
