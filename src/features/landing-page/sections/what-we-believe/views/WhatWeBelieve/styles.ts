import { StyleProps } from './../../../../../../shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  bgcolor: 'background.paper',
  px: 2,
  py: 8
};

export const header: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: { xs: 'center', md: 'flex-start' },
  justifyContent: 'center',
  width: '100%',
  color: 'white'
};

export const content: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1440,
  color: 'grey.300',
  px: 2
};

export const grid: StyleProps = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr 1fr',
    lg: 'repeat(auto-fit, minmax(360px, 1fr))'
  },
  gridGap: 24,
  width: '100%',
  maxWidth: 1440,
  py: 7
};
