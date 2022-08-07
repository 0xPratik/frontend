import { ComponentStyleConfig } from "@chakra-ui/react";

const FormLabel: ComponentStyleConfig = {
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

export default FormLabel;