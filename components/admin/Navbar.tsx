import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../common/Logo";

type Props = {};

function Navbar({}: Props) {
  return (
    <HStack
      justifyContent="space-between"
      px={[0, 10, 30]}
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
    </HStack>
  );
}

export default Navbar;
