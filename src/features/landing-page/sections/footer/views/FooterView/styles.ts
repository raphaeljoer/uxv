import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  bgcolor: 'background.paper'
};

export const grid: StyleProps = {
  color: 'white',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  pb: 8,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
};

export const button: StyleProps = {
  border: '1px solid'
};

export const info: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  gap: 2
};

export const copyright: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  pt: 8,
  color: 'white'
};
