import { createTheme } from "@mui/material/styles";

export const colors = {
  blue: "#4494F8",
  green: "#73F25F",
  yellow: "#EFEE02",
  orange: "#FF7B22",
  magenta: "#E65688",
  purple: "#5F6EEF",
  gray: "#373B3D",
  white: "#fff",
  black: "#000",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.purple,
    },
    text: {
      primary: colors.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      default: colors.black,
      paper: colors.black,
    },
    success: {
      main: colors.green,
    },
    warning: {
      main: colors.orange,
    },
    info: {
      main: colors.gray,
    },
  },
  typography: {
    fontFamily: ["Trispace"].join(","),
    button: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.7,
    },
    h1: {
      fontSize: "5.2rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.green,
          borderRadius: 0,
          padding: "14px 37.5px",
          color: colors.black,
          fontSize: "1rem",
          fontWeight: 700,
          position: "relative",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "rgb(143, 244, 127)",
            color: colors.black,
          },
        },
        sizeSmall: {
          fontSize: "0.75rem",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
