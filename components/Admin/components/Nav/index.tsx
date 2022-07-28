import React from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  HStack,
  VStack,
  Circle,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import ConnectWallet from "../../../store/components/ConnecWallet";
import { AddIcon } from "@chakra-ui/icons";

function AdminNav() {
  return (
    <HStack w="full" py={14} px={8} align="center" justify={"space-between"}>
      <Box>
        <Heading fontSize="28px">Dashboard</Heading>
      </Box>
      <HStack>
        <Circle
          size="40px"
          border="1px"
          borderColor={"white"}
          _hover={{
            bg: "#313131 ",
            cursor: "pointer",
          }}
        >
          <BellIcon />
        </Circle>
        <ConnectWallet />
        <Button leftIcon={<AddIcon />} variant="redGradient">
          New Product
        </Button>
      </HStack>
    </HStack>
  );
}

export default AdminNav;
