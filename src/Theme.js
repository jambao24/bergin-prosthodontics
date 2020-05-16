import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#D685D5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#FBCFFA',
      main: '#D8D3D8',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }
  },
});

export default theme;