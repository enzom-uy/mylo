import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import '@fontsource/poppins/900.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/100.css';

const colors = {
  primary: '#681277',
  'primary-light': '#8d1fa0',
  secondary: '#850d2e',
  'secondary-light': '#9e1138',
  black: '#0b020c',
  'black-75': '#484149',
  'black-50': '#858186',
  'black-25': '#c2bfc2',
  'black-10': '#e7e6e7',
  'black-5': '#f2f2f3',
  'blue-gray': '#2d3748',
  'blue-gray-transparent': 'rgba(45, 55, 72, .3)',
  white: '#ebf0f6',
  error: '#ab0935',
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#F9F9F9', '#15181c')(props),
      fontFamily: `'Poppins', sans-serif`,
      transitionProperty: 'all',
      transitionDuration: 'normal',
      minHeight: '100vh',
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const shadows = {
  'light-shadow': '0 8px 8px 0 rgba(0, 0, 0, 0.20)',
  baseline: '0 0 10px 0 rgba(0, 0, 0, 0.25)',
  borderlike: '0 0 10px 0 rgba(0, 0, 0, 0.25)',
};

const breakpoints = {
  xsm: '320px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px',
};

const fontSizes = {
  heading: 'clamp(2.5rem, 7vw, 3rem)',
  paragraph: '1.313rem',
  'heading-1': '5.5rem',
  'heading-2': '4.125rem',
  'heading-3': '3.125rem',
  'heading-4': '2.313rem',
  'heading-5': '1.75rem',
  'heading-6': '1.563rem',
};

const sizes = {
  pfp: '50px',
};

export const theme = extendTheme({
  styles,
  config,
  colors,
  breakpoints,
  shadows,
  fontSizes,
  sizes,
});

export default theme;
