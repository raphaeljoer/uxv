import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {};

export const grid: StyleProps = {
  position: 'relative',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: {
    xs: '1fr 1fr',
    md: '1fr 1fr 1fr 1fr 1fr 1fr'
  }
};

export const image: StyleProps = {
  display: 'flex',
  position: 'relative',
  minWidth: 120,
  minHeight: 180
};
