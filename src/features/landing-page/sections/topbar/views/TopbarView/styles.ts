import { StylesProps } from 'shared/types/styles-props';

export const superContainer: StylesProps = {
  position: 'fixed',
  top: 0,
  zIndex: 'appBar',
  bgcolor: 'background.default'
};

export const superContent: StylesProps = {
  py: 2
};

export const container: StylesProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
};

export const logo: StylesProps = {
  position: 'relative',
  width: 239,
  height: 40,
  overflow: 'hidden'
};

export const social: StylesProps = {
  display: 'flex',
  alignItems: 'center',
  gap: 1
};
