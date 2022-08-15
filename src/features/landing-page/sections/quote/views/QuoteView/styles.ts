import { StylesProps } from 'shared/types/styles-props';

export const superContainer: StylesProps = {
  display: 'flex',
  alignItems: 'center',
  // p: 8,
  minHeight: 440,
  backgroundImage: 'url(/features/landing-page/quote/quote.jpg)',
  backgroundPosition: 'center -64px'
};

export const superContent: StylesProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  py: 0
};

export const icon: StylesProps = {
  width: 64,
  height: 64,
  transform: 'rotate(180deg)'
};

export const quote: StylesProps = {
  my: 4,
  p: 5,
  pb: 8,
  borderRadius: 4,
  maxWidth: 590,
  bgcolor: 'rgb(255, 255, 255, 0.2)',
  backdropFilter: 'blur(8px)'
};

export const bg: StylesProps = {
  position: 'relative',
  width: '100%',
  height: '100%'
};
