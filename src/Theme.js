import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#846B8A',
      // main: '#F08080',
      // dark: will be calculated from palette.primary.main , 
      contrastText: 'white'
    },
    secondary: {
      main: '#A8C7BB',
      // dark: will be calculated from palette.secondary.main, main: '#F8AD9D',
      contrastText: 'white'
    }
  },
});

export default theme;