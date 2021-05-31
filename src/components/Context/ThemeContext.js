import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#FFFFFF',
    foreground: '#3D3D3B',
    accent: '#CDB4DB',
    grey: '#FAFAFA',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
