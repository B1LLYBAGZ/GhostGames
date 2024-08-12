import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.harlequin,
    },
    secondary: {
      main: colors.bilbao,
    },
    text: {
      primary: colors.black,
      secondary: colors.scorpion,
    },
    background: {
      default: colors.silverSand,
      paper: colors.mineShaft,
    },
  },
  typography: {
    fontFamily: '"Audiowide", sans-serif',
    h1: {
      fontFamily: '"Audiowide", sans-serif',
    },
    h2: {
      fontFamily: '"Audiowide", sans-serif',
    },
    h3: {
      fontFamily: '"Audiowide", sans-serif',
    },
    h4: {
      fontFamily: '"Audiowide", sans-serif',
    },
    h5: {
      fontFamily: '"Audiowide", sans-serif',
    },
    h6: {
      fontFamily: '"Audiowide", sans-serif',
    },
    body1: {
      fontFamily: '"Audiowide", sans-serif',
    },
    body2: {
      fontFamily: '"Audiowide", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Audiowide", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Audiowide", sans-serif',
    },
    button: {
      fontFamily: '"Audiowide", sans-serif',
    },
    caption: {
      fontFamily: '"Audiowide", sans-serif',
    },
    overline: {
      fontFamily: '"Audiowide", sans-serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
  },
});

export default theme;
