import React from "react";
import { Heading, Text, HStack, Box, Button } from "@chakra-ui/react";
import BackButton from "../../../../Product/components/BackButton";

function Nav() {
  return (
    <HStack w="full" py={14} align="center" justify={"space-between"}>
      <HStack align="center">
        <Box>
          <BackButton />
        </Box>
        <Box>
          <Heading fontSize="26px">New Product</Heading>
          <Text color="#BCBCBC" fontSize={"16px"}>
            Provide information to create your new product
          </Text>
        </Box>
      </HStack>
      <Box>
        <Button variant="redGradient">Create new Product</Button>
      </Box>
    </HStack>
  );
}

export default Nav;
