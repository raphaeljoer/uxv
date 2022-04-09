import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  bgcolor: 'background.default'
};

export const content: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 1440,
  px: 2,
  py: 8
};
