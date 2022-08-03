import { extendTheme, theme as base } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import type {
  ComponentStyleConfig,
  ComponentMultiStyleConfig,
} from "@chakra-ui/theme";
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

  variants: {
    admin: {
      color: "#CFCFCF",
      fontSize: "16px",
      lineHeight: "20px",
    },
  },
};

const TableTheme: ComponentStyleConfig = {
  parts: ["th", "td"],
  baseStyle: {
    th: {
      color: "#888888",
      fontSize: "14px",
      fontWeight: "light",
      borderColor: "#8f8f8f",
      px: "20px",
    },
    td: {
      fontSize: "14px",
      color: "#FFFFFF",
      borderColor: "#8f8f8f ",
    },
  },
};

const TextAreaTheme: ComponentStyleConfig = {
  baseStyle: {
    border: "none",
    borderColor: "none",
    outline: "none",
    color: "green",
  },
};

// const SelectTheme: ComponentStyleConfig = {
//   parts: ["field", "icon"],
//   baseStyle: {
//     field: {
//       bg: "#2E2E2E",
//       border: "none",
//       _hover: {
//         bg: "#2E2E2E",
//       },
//     },
//   },
// };

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
    admin: {
      field: {
        color: "white",
        bg: "#1A1A1A",
        _hover: {
          bg: "#1A1A1A",
        },
        _focus: {
          bg: "#1A1A1A",
        },
        rounded: "none",
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
    Select,
    TextArea: { ...TextAreaTheme },
  },
});

export default theme;
