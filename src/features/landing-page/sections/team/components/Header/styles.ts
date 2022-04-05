import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};
export const title: StyleProps = {
  fontSize: 40,
  fontWeight: 700,
  color: 'white',
  textAlign: 'center',
  mb: 2
};
export const description: StyleProps = {
  textAlign: 'center',
  color: 'white',
  maxWidth: 396
};
