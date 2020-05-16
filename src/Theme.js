import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ec8bec',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#fc37ba',
      // dark: will be calculated from palette.secondary.main,
      //contrastText: '#ffcc00',
    }
  },
});

export default theme;