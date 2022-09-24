import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  display: 'flex',
  width: '100%'
};

export const image: StylesProps = {
  position: 'relative',
  width: 200,
  height: 145,
  borderRadius: 2,
  overflow: 'hidden'
};
export const infoContainer: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
};

export const name: StylesProps = {
  color: 'white',
  ml: 2
};

export const socialContainer: StylesProps = {
  display: 'flex',
  gap: 2,
  mt: 2,
  ml: 2
};
