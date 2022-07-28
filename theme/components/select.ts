import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Select: ComponentStyleConfig = {
  baseStyle: {
    color: "orange.500",
    w: "80px",
    bg: "#2E2E2E",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
  },

  variants: {
    pratikVariant: {
      color: "orange.500",
      w: "200px",
      bg: "#2E2E2E",
    },
  },
  defaultProps: {
    variant: "pratikVariant",
  },
};

export default Select;
