import { ComponentStyleConfig } from "@chakra-ui/react";

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

export default TableTheme;