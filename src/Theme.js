import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#67697C',
      // main: '#F08080',
      // dark: will be calculated from palette.primary.main , 
      contrastText: 'white'
    },
    secondary: {
      main: '#C6878F',
      // dark: will be calculated from palette.secondary.main, main: '#F8AD9D',
      contrastText: 'white'
    }
  },
});

export default theme;