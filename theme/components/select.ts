import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Select: ComponentStyleConfig = {
  parts: ["field", "icon"],
  baseStyle: {
    field: {
      color: "white",
      bg: "#2E2E2E",
    },
  },

  variants: {
    pratikVariant: {
      field: {
        color: "white",
        _placeholder: {
          color: "#8F8F8F",
        },
        bg: "#2E2E2E",
      },
    },
  },
  defaultProps: {
    variant: "pratikVariant",
  },
};

export default Select;
