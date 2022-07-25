import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {},
  fonts: {},
  fontSize: {
    sm: '10px',
    md: '24px',
    lg: '40px',
    xl: '55px'
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

const theme = extendTheme({ customTheme });

export default customTheme;