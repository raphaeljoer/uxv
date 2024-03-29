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

export const social: StylesProps = {
  display: 'flex',
  alignItems: 'center',
  gap: 1
};

export const icon: StylesProps = {
  color: 'black',
  border: '1px solid',
  borderColor: 'grey.300'
};
