/** @format */

import { createTheme } from "@mui/material/styles";

export const colors = {
  blue: "#4494F8",
  green: "#73F25F",
  yellow: "#EFEE02",
  orange: "#FF7B22",
  magenta: "#E65688",
  purple: "#5F6EEF",
  violet: "#b20edb",
  grays: {
    100: "#E5E5E5",
    200: "#CBCBCB",
    300: "#888",
    400: "#777",
    500: "#6D6D6D",
    600: "#4C4C4C",
    700: "#373B3D",
    800: "#222",
    900: "#111",
  },
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
      main: colors.grays[700],
    },
  },
  typography: {
    // Base Typography

    fontFamily: [
      "Space Grotesk",
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
      fontDisplay: "swap",
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
      a {
        text-decoration: none;
        color: inherit;
      }
      img {
       width: 100%;
      }
      pre::-webkit-scrollbar {
        background: transparent;
        height: 8px;
      }
      pre::-webkit-scrollbar-track {
        background: ${colors.grays[700]};
      }
      pre::-webkit-scrollbar-thumb {
        background: ${colors.grays[500]};
        border-radius: 8px;
      }
    `,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    button: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.7,
    },
    h1: {
      fontDisplay: "swap",
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
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: colors.magenta,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textDecorationColor: "currentColor",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid white",
          borderRadius: "0px !important",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
          fontWeight: "700",
          paddingLeft: 0,
          paddingRight: 16,
        },
        content: {
          margin: "12px 0",
          "&$expanded": {
            margin: "12px 0",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          fontSize: "1.25rem",
          fontWeight: "500",
          padding: "16px 0",
        },
      },
    },
  },
});

export default theme;
