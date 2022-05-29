import { extendTheme, theme as base } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
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
    FormLabel: {
      variants: {
        darklabel: () => {
          return {
            color: "#CFCFCF",
            fontWeight: "400",
            lineHeight: "20px",
            marginBottom: "16px",
          };
        },
      },
    },

    Input: {
      variants: {
        ctc: () => ({
          border: "1px solid #ffffff",
          bg: "transparent",
        }),
        darkinput: () => ({
          color: "red.500",
          h: "6rem",
          bg: "#2E2E2E",
          // _placeholder: {
          //   backgroundColor: "#2E2E2E",
          // },
        }),
      },
    },
  },
});

export default theme;
