import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Flex,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

function TotalAmount() {
  return (
    <Box py={6} px={7} w="full" bg="#252525" borderRadius={"base"}>
      <Heading pb={8} fontSize="20px">
        Total Amount
      </Heading>
      <VStack>
        <HStack w={"full"} align="center" justify={"space-between"}>
          <Heading fontSize={"18px"}>Order Total</Heading>
          <Heading fontSize={"18px"}>USDC 0.00</Heading>
        </HStack>
        <Text align="left" w="full">
          Your Wallet
        </Text>
        <Button w="full">Pay</Button>
      </VStack>
    </Box>
  );
}

export default TotalAmount;
