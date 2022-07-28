import { extendTheme, theme as base } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import type { ComponentStyleConfig } from "@chakra-ui/theme";
import Button from "./components/button";
import Select from "./components/select";

const TextTheme: ComponentStyleConfig = {
  baseStyle: {
    color: "white",
  },
};

const InputLeftAddonTheme: ComponentStyleConfig = {
  baseStyle: {
    color: "white",
    bg: "#2E2E2E",
  },
};

const FormLabelTheme: ComponentStyleConfig = {
  baseStyle: {
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
  },
};

const InputTheme: ComponentStyleConfig = {
  baseStyle: {
    px: 4,
    py: 3.5,
  },

  variants: {
    filled: {
      field: {
        color: "white",
        bg: "#2E2E2E",
        _placeholder: { color: "#8F8F8F" },
        _hover: {
          bg: "#313131",
        },
        _focus: {
          borderColor: "#D6096E",
        },
      },
    },
  },

  defaultProps: {
    variant: "filled",
  },
};

const theme = extendTheme({
  fonts: {
    body: `Lexend`,
    heading: `Lexend`,
  },
  body: {
    bg: "#181717",
    color: "#FFF4F9",
  },
  colors: {
    brand: {
      700: "#FFF4F9",
      600: "#D6096E",
      500: "#FFA7D2",
      400: "#181717",
      200: "#181717",
      300: "#313131",
      100: "#515151",
    },
  },
  components: {
    Button,
    Text: { ...TextTheme },
    Heading: { ...TextTheme },
    FormLabel: { ...FormLabelTheme },
    Input: { ...InputTheme },
    InputLeftAddon: { ...InputLeftAddonTheme },
  },
});

export default theme;
