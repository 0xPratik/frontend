import { extendTheme, theme as base } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import type {
  ComponentStyleConfig,
  ComponentMultiStyleConfig,
} from "@chakra-ui/theme";
import Button from "./components/button";
import Select from "./components/select";
import Input from "./components/input";
import TextArea from "./components/textarea";
import Text from "./components/text";
import FormLabel from "./components/formlabel";
import InputLeftAddon from "./components/inputLeftAddon";

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
    Text: Text,
    Heading: Text,
    FormLabel,
    Input,
    InputLeftAddon,
    Select,
    TextArea,
  },
});

export default theme;
