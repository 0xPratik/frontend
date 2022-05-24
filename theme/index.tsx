import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Lexend`,
    heading: `Lexend`,
  },
  components: {
    Button: {
      variants: {
        primary: () => ({
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: "500",
          color: "#ffffff",
          rounded: "200px",
          bg: "linear-gradient(256.54deg, #C12020 8.05%, #D6096E 83.79%)",
        }),
      },
    },
  },
});

export default theme;
