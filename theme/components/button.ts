import type { ComponentStyleConfig } from "@chakra-ui/theme";

// export const Button: ComponentStyleConfig = {
//   baseStyle: {
//     fontSize: "16px",
//     borderColor: "#F23090",
//     bg: "#FFF4F9",
//     color: "#F23090",
//     border: "1px",
//     borderRadius: "full",
//     lineHeight: "20px",
//     rounded: "200px",
//     fontWeight: "500",
//   },
// };

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontSize: "16px",
    borderColor: "#F23090",
    bg: "#FFF4F9",
    color: "#F23090",
    border: "1px",
    borderRadius: "full",
    lineHeight: "20px",
    rounded: "200px",
    fontWeight: "500",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    admin: {
      fontSize: "18px",
      color: "#FFFFFF",
      borderRadius: "none",
      borderColor: "#1F1F1F",
      outline: "#1F1F1F",
      bg: "#1F1F1F",
      fontWeight: "500",
      border: "none",
    },
    redGradient: {
      color: "#FFFFFF",
      fontSize: "14px",
      border: "none",
      bgGradient: "linear(to-l, #C12020, #D6096E)",
    },
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "#FFF4F9",
      color: "#F23090",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
};

export default Button;
