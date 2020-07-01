import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#67697C',
      contrastText: 'white'
    },
    secondary: {
      main: '#C6878F',
      contrastText: 'white'
    }
  },
});

export default theme;