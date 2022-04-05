import { StyleProps } from 'shared/types/style-props';

export const container: StyleProps = {
  display: 'flex',
  width: '100%',
  bgcolor: 'background.paper',
  justifyContent: 'center'
};

export const section: StyleProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 1440,
  my: 8
};
export const title: StyleProps = {
  fontSize: 40,
  fontWeight: 700,
  color: 'white',
  textAlign: 'center',
  mb: 3
};
export const description: StyleProps = {
  textAlign: 'center',
  color: 'white',
  maxWidth: 480
};
