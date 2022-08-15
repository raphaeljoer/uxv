import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  px: 2,
  pt: 2,
  pb: 4,
  minHeight: 456,
  borderRadius: 4,
  border: '1px dashed',
  borderColor: 'grey.900'
};
export const img: StylesProps = {
  filter: 'grayscale(100%)',
  width: '100%',
  height: '100%'
};
export const image: StylesProps = {
  position: 'relative',
  width: '100%',
  minWidth: 248,
  minHeight: { xs: 460, md: 460, lg: 320 },
  borderRadius: 2,
  overflow: 'hidden',
  mb: 2
};
export const overlay: StylesProps = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 6000,
  objectFit: 'cover'
};
export const overlay2: StylesProps = {
  position: 'relative',
  height: '100%',
  width: '100%',
  zIndex: 6000,
  objectFit: 'cover'
};
export const name: StylesProps = {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'white',
  mb: 1
};
export const position: StylesProps = {
  textAlign: 'center',
  color: 'grey.500',
  maxWidth: 180,
  height: '100%',
  mb: 2
};
export const socials: StylesProps = {
  display: 'flex',
  justifyContent: 'center',
  gap: 2
};
export const button: StylesProps = {
  border: '1px solid'
};
