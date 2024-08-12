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
    allVariants: {
      color: colors.black,
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
