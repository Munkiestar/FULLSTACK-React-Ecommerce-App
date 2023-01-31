import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#E3E3E3",
    200: "#C8C8C8",
    300: "#A4A4A4",
    400: "#818181",
    500: "#666666",
    600: "#515151",
    700: "#434343",
    800: "#383838",
    900: "#000000",
  },
  secondary: {
    100: "#FFDDDD",
    200: "#FFC0C0",
    300: "#FF9494",
    400: "#FF5757",
    500: "#FF2323",
    600: "#FF0000",
    700: "#D70000",
    800: "#B10303",
    900: "#920A0A",
  },

  neutral: {
    100: "#F4FFC1",
    200: "#EEFF86",
    300: "#ECFF41",
    400: "#F2FF0D",
    500: "#FFFF00",
    600: "#D1BF00",
    700: "#A68B02",
    800: "#896C0A",
    900: "#74580F",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
