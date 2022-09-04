import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};

export const content: StylesProps = {
  position: 'relative',
  maxWidth: 1440,
  width: '100%',
  mt: 10,
  color: 'black'
};

export const img: StylesProps = {
  position: 'relative',
  minHeight: { sm: 360, md: 480 }
};

export const title: StylesProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: { sm: 'translate(-50%, -100%)', lg: 'translate(-120%, -100%)' },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 40, md: 64 },
  maxWidth: { sm: 320, md: 480 },
  fontWeight: 700,
  color: 'secondary.main'
};

export const subTitle: StylesProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: { sm: 'translate(-50%, 0%)', lg: 'translate(-78%, -88%)' },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 32, md: 48 },
  maxWidth: 560,
  color: 'black',
  fontFamily: 'Cedarville Cursive'
};

export const title2: StylesProps = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: {
    xs: 'translate(-50%, -120%)',
    md: 'translate(-50%, -120%)',
    xl: 'translate(-50%, -120%)'
  },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 40, md: 64 },
  maxWidth: { sm: 320, md: 480 },
  fontWeight: 700,
  color: 'secondary.main'
};

export const subTitle2: StylesProps = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: {
    sm: 'translate(-50%, -10%)',
    md: 'translate(-50%, -50%)',
    xl: 'translate(-50%, -40%)'
  },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 32, md: 48 },
  maxWidth: 560,
  color: 'black',
  fontFamily: 'Cedarville Cursive'
};

export const title3: StylesProps = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: {
    xs: 'translate(-50%, -100%)',
    md: 'translate(-40%, -420%)',
    xl: 'translate(-40%, -420%)'
  },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 40, md: 64 },
  maxWidth: { sm: 320, md: 480 },
  fontWeight: 700,
  color: 'secondary.main'
};

export const subTitle3: StylesProps = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: {
    sm: 'translate(-50%, 0%)',
    md: 'translate(-45%, -330%)',
    xl: 'translate(-45%, -330%)'
  },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 32, md: 48 },
  maxWidth: 560,
  color: 'black',
  fontFamily: 'Cedarville Cursive'
};

export const controls: StylesProps = {
  position: 'absolute',
  right: 0,
  top: '50%',
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  p: 1,
  gap: 0.5,
  bgcolor: 'grey.200',
  borderRadius: 2,
  mr: 1,
  transform: 'translate(0%, -100%)'
};
