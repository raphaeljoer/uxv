import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  bgcolor: 'background.paper'
};

export const grid: StylesProps = {
  color: 'white',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(300px 1fr))',
  rowGap: 3,
  alignItems: 'center',
  pb: 8,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
};

export const button: StylesProps = {
  border: '1px solid'
};

export const info: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  gap: 2
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
