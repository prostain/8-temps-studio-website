import React from 'react';
import Router8T from './app/routing/Router8T';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {defaultTheme} from './styles/defaultTheme'

const theme = createTheme(defaultTheme)
// import './styles/index.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router8T />

      </div>
    </ThemeProvider>

  );
}

export default App;
