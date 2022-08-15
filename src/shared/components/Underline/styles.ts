import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  textDecoration: 'underline',
  textDecorationColor: (theme) => theme.palette.secondary.main
};
