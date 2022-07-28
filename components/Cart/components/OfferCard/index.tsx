import React from "react";
import { Box, Heading, HStack, Text, Button } from "@chakra-ui/react";

function OfferCard() {
  return (
    <Box py={6} px={8} borderRadius="base" bg="#252525">
      <Heading color="white" pb={6} fontSize="20px">
        Offers Available
      </Heading>
      <HStack w="full" align="center" justify={"space-between"}>
        <Text maxW={"65%"} color="white" fontSize={"14px"}>
          Enjoy discounts by applying these offers on your purchase
        </Text>
        <Button
          border="1px"
          borderColor={"#F23090"}
          borderRadius="full"
          bg={"#FFF4F9"}
          color="#D6096E"
          fontSize={"12px"}
        >
          View Offers
        </Button>
      </HStack>
    </Box>
  );
}

export default OfferCard;
