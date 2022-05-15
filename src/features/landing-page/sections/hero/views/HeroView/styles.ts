import { StylesProps } from 'shared/types/styles-props';

export const container: StylesProps = {
  mt: 8,
  color: 'black'
};

export const img: StylesProps = {
  position: 'relative',
  minHeight: { sm: 540, md: 768 }
};

export const title: StylesProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: { sm: 'translate(-50%, -100%)', lg: 'translate(-104%, -100%)' },
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
  transform: { sm: 'translate(-50%, 0%)', lg: 'translate(-56%, -88%)' },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 32, md: 48 },
  maxWidth: 560,
  color: 'black',
  fontFamily: 'Cedarville Cursive'
};

export const title2: StylesProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: {
    sm: 'translate(-50%, -25%)',
    md: 'translate(-50%, 120%)',
    xl: 'translate(-50%, 320%)'
  },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 40, md: 64 },
  maxWidth: { sm: 320, md: 480 },
  fontWeight: 700,
  color: 'secondary.main'
};

export const subTitle2: StylesProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: {
    sm: 'translate(-50%, 80%)',
    md: 'translate(-50%, 240%)',
    xl: 'translate(-50%, 420%)'
  },
  textAlign: { sm: 'center', lg: 'left' },
  fontSize: { sm: 32, md: 48 },
  maxWidth: 560,
  color: 'black',
  fontFamily: 'Cedarville Cursive'
};
