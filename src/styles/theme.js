import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xss: 220,
      xs: 300, // phone
      xsm: 450,
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      lgs: 1400,
      xl: 1536,
      xxl: 1800,
      ultra: 2000, // large screens
    },
  },
});
