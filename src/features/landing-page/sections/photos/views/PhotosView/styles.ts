import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {};

export const grid: StylesProps = {
  position: 'relative',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: {
    xs: '1fr 1fr',
    md: '1fr 1fr 1fr 1fr 1fr 1fr'
  }
};

export const image: StylesProps = {
  display: 'flex',
  position: 'relative',
  minWidth: 120,
  minHeight: 180
};
