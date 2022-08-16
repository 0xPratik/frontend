import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCart } from "../../../../store/cartStore";

function OrderSummary() {
  const router = useRouter();
  const CartItems = useCart((state) => state.cart);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let tempTotal = 0;
    CartItems.forEach((item) => {
      tempTotal = tempTotal + item.price;
    });
    console.log(tempTotal);
    if (tempTotal !== 0) {
      setTotal(tempTotal);
    }
  }, [total]);
  return (
    <Box py={6} px={8} borderRadius="base" bg="#252525">
      <Heading color="white" pb={6} fontSize="20px">
        Order Summary
      </Heading>
      <VStack w="full">
        <HStack w="full" align="center" justify={"space-between"}>
          <Text color="#8F8F8F" fontSize="18px">
            Sub Total
          </Text>
          <Text color="white" fontSize="18px">
            USDC {total}
          </Text>
        </HStack>
        <Divider my={4} borderColor="#313131 " />
        <HStack w="full" align="center" justify={"space-between"}>
          <Text color="#8F8F8F" fontSize="18px">
            Discount
          </Text>
          <Text color="white" fontSize="18px">
            USDC 0
          </Text>
        </HStack>
        <Divider my={4} borderColor="#313131 " />
        <HStack
          fontWeight={"bold"}
          w="full"
          align="center"
          justify={"space-between"}
        >
          <Text color="white" fontSize="18px">
            Order Total
          </Text>
          <Text color="white" fontSize="18px">
            USDC 100
          </Text>
        </HStack>
        <Divider my={4} borderColor="#313131 " />
        <Box pt={10} w="full">
          <Button
            border="1px"
            borderColor={"#F23090"}
            borderRadius="full"
            bg={"#FFF4F9"}
            onClick={() => router.push("/store/checkout")}
            color="#D6096E"
            w="full"
            fontSize={"12px"}
            rounded="400px"
          >
            Proceed to Checkout
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default OrderSummary;
