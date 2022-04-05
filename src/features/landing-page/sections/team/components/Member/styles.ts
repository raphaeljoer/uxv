import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 288,
  height: 456
};
export const image: StyleProps = {
  position: 'relative',
  width: '100%',
  minWidth: 248,
  minHeight: 288,
  borderRadius: 2,
  overflow: 'hidden',
  mb: 2,
  filter: 'grayscale(100%)'
};
export const name: StyleProps = {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'white',
  mb: 1
};
export const position: StyleProps = {
  textAlign: 'center',
  color: 'grey.500',
  maxWidth: 180,
  height: '100%',
  mb: 2
};
export const socials: StyleProps = {
  display: 'flex',
  justifyContent: 'center',
  gap: 2
};
export const button: StyleProps = {
  border: '1px solid'
};
