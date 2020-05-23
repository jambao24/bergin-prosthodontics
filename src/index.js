import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './Theme';
import App from './App';

import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);