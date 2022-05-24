import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Lexend`,
    heading: `Lexend`,
  },
  components: {
    Button: {
      baseStyle: {
        fontSize: "16px",
        lineHeight: "20px",
        fontWeight: "500",
        color: "#ffffff",
        rounded: "200px",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        pinkGradient: () => ({
          bg: "linear-gradient(256.54deg, #C12020 8.05%, #D6096E 83.79%)",
        }),
        filled: () => ({
          bg: "#ffffff",
          color: "#222222",
        }),
        outlined: () => ({
          bg: "transparent",
          border: "2px solid #ffffff",
        }),
      },
    },
  },
});

export default theme;
