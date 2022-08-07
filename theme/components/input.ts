import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Input: ComponentStyleConfig = {
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

export default Input;
