import { createTheme } from "@mui/material/styles";
import SpaceGroteskWoff2 from "../assets/fonts/SpaceGrotesk-Regular.woff2";
import SpaceGroteskBoldWoff2 from "../assets/fonts/SpaceGrotesk-Bold.woff2";

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

let theme = createTheme({
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
    // Base Typography
    fontFamily: [
      "SpaceGrotesk",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      margin: 0,
      fontSize: "3rem",
      fontWeight: 600,
      marginBlockStart: "2.5rem",
      lineHeight: 1,
    },
    h2: {
      margin: 0,
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBlockStart: "2.5rem",
      lineHeight: 1,
    },
    h3: {
      margin: 0,
      fontSize: "2rem",
      marginBlockStart: "2rem",
      fontWeight: 600,
    },
    h4: {
      margin: 0,
      fontSize: "1.75rem",
      marginBlockStart: "2rem",
      fontWeight: 600,
    },
    h5: {
      margin: 0,
      fontSize: "1.5rem",
      marginBlockStart: "2rem",
      fontWeight: 600,
    },
    h6: {
      margin: 0,
      fontSize: "1.25rem",
      marginBlockStart: "2rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.5em",
    },
    subtitle2: {
      fontSize: "1.25em",
    },
    body1: {
      fontSize: "1em",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.75em",
      lineHeight: 1.75,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'SpaceGrotesk';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('SpaceGrotesk'), local('SpaceGrotesk-Regular'), url(${SpaceGroteskWoff2}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'SpaceGrotesk';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('SpaceGrotesk'), local('SpaceGrotesk-Bold'), url(${SpaceGroteskBoldWoff2}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      img {
       width: 100%;
      }
      span {
        color: ${colors.green}
      }
    `,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    button: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.7,
    },
    h1: {
      margin: 0,
      [`${theme.breakpoints.up("md")}`]: {
        fontSize: "5.25rem",
      },
      [`${theme.breakpoints.down("md")}`]: {
        fontSize: "3rem",
      },
    },
    subtitle1: {
      [`${theme.breakpoints.down("lg")}`]: {
        fontSize: "1.25rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "4px solid #E5E5E5",
          borderRadius: "15px",
          color: "white",
          padding: "14px 37.5px",
          textTransform: "uppercase",
          lineHeight: "20px",
          letterSpacing: "0.29em",
          position: "relative",
          [`${theme.breakpoints.up("md")}`]: {
            fontSize: "16px",
          },
          [`${theme.breakpoints.down("md")}`]: {
            fontSize: "12px",
          },
        },
        sizeSmall: {
          fontSize: "0.75rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
