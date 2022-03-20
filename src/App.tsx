import React from 'react';
import Router8T from './app/routing/Router8T';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {defaultTheme} from './styles/defaultTheme'
import LandingPageNav from './app/modules/common/LandingPageNav';
import Footer from './app/modules/common/Footer';

const theme = createTheme(defaultTheme)

const App= () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPageNav/>
        <Router8T />
        <Footer/>
      </div>
    </ThemeProvider>

  );
}

export default App;
