// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from './theme.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    <CssVarsProvider theme = {theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </>,
)
