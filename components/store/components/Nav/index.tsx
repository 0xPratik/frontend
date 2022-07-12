import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  useDisclosure,
  HStack,
  Center,
  Circle,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Logo from "../../../common/Logo";

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        bg={"#181717"}
        borderBottom="1px"
        borderColor={"#515151"}
        color={"white"}
        minH={"74px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        justify={"space-between"}
      >
        <Logo />
        <Box>
          <HStack spacing={"32px"}>
            <Circle size="40px" border="1px" borderColor={"white"}>
              Bell
            </Circle>
            <Circle size="40px" border="1px" borderColor={"white"}>
              heart
            </Circle>
            <Circle size="40px" border="1px" borderColor={"white"}>
              cart
            </Circle>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
