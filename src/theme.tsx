import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const theme = extendTheme({
  colors: {
    black: '#16161D',
    gray: {
      900: '#202124',
    },
  },
  fonts,
  breakpoints,
});

export default theme;
