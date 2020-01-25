import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

import Nav from 'components/Nav';
import Slider from 'components/Slider';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Slider />
    </ThemeProvider>
  );
};

export default App;
