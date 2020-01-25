import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storeShop } from 'reducers';

import Nav from 'components/Nav';
import Slider from 'components/Slider';
import Offer from 'components/Offer/index';

const store = createStore(storeShop);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Slider />
        <Offer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
