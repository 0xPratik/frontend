import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../common/Logo";
import LogoSM from "../common/LogoSM";

type Props = {};
const DeskTopNavbar = (props: Props) => {
  return (
    <Flex
      display={{ base: "none", xl: "flex" }}
      justifyContent="space-between"
      px={[0, 10, 30]}
      align={"center"}
      paddingTop="1rem"
      paddingBottom="0.5rem"
    >
      <Heading
        color={"#ffffff"}
        lineHeight={"2rem"}
        fontFamily={"Lexend"}
        fontWeight="600"
        fontSize={"1.625rem"}
      >
        Dashboard
      </Heading>
      <HStack spacing={5}>
        <InputGroup w={"fit-content"}>
          <Input
            ml={2}
            h="3.75rem"
            w={"fit-content"}
            backgroundColor={"#2E2E2E"}
            placeholder="search..."
            variant={"darkinput"}
            _placeholder={{ color: "#8F8F8F" }}
            type={"text"}
          />
          <InputLeftElement mx={2} h={"full"}>
            <SearchIcon w={5} h={5} color={"#8F8F8F"} />
          </InputLeftElement>
        </InputGroup>

        <IconButton
                  bg={"transparent"}
                  outline={"1px solid #FFFFFF"}
          aria-label="Notification"
          icon={<Image src="/assets/admin/bell.svg" />}
        />
        <Button
          leftIcon={<Image src="/assets/admin/wallet.svg" />}
          variant={"outline"}
          padding={"1.4rem"}
          outline={"2px solid #FFFFFF"}
        >
          Connect Wallet
        </Button>
        <Button
          leftIcon={<Image src="/assets/admin/plus.svg" />}
          variant={"pinkGradient"}
          padding={"1.563rem"}
        >
          New Product
        </Button>
      </HStack>
    </Flex>
  );
};
const MobileNavbar = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex direction={"row"} justifyContent="space-between" p={4}>
      <LogoSM />

      <HStack spacing={5}>
        <IconButton
          outline={"0.5px solid #FFFFFF"}
          aria-label={"search"}
          size={"xs"}
          icon={<Image src="/assets/admin/search.svg" />}
        />
        <IconButton
          outline={"0.5px solid #FFFFFF"}
          size={"xs"}
          icon={<Image src="/assets/admin/bell.svg" />}
          aria-label={"bell"}
        />
        <IconButton
          outline={"0.5px solid #FFFFFF"}
          size={"xs"}
          icon={<Image src="/assets/admin/hamberger.svg" />}
          aria-label={"hamberger"}
        />
      </HStack>
    </Flex>
  );
};
function Navbar({}: Props) {
  return (
    <>
      <Box>
        <DeskTopNavbar />
      </Box>
      <Box display={{ xl: "none" }}>
        <MobileNavbar />
      </Box>
    </>
  );
}

export default Navbar;
