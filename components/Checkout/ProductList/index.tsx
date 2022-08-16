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
} from "@chakra-ui/react";
// import Image from "next/image";
import { useCart } from "../../../store/cartStore";

function ProductList() {
  const cartItems = useCart((state) => state.cart);
  return (
    <Box py={6} px={7} w="full" bg="#252525" borderRadius={"base"}>
      <VStack spacing={4}>
        {cartItems.map((item) => {
          return (
            <SimpleGrid key={item.id} columns={3}>
              <Flex
                border="1px"
                borderColor={"#313131"}
                borderRadius="base"
                width="100px"
                align="flex-start"
                justify={"flex-start"}
              >
                <Image
                  src={item.image}
                  minW="full"
                  border="1px"
                  borderColor={"#313131"}
                  borderRadius="base"
                  objectFit={"cover"}
                  height={"100px"}
                  alt={item.title}
                />
              </Flex>
              <Box>
                <Heading fontSize="18px">{item.title.slice(0, 19)}...</Heading>
                <Text fontSize="14px">
                  <span style={{ color: "#8F8F8F" }}>Quantity:</span> 1
                </Text>
              </Box>
              <Box>
                <Heading fontSize="18px">USDC {item.price}</Heading>
              </Box>
            </SimpleGrid>
          );
        })}
      </VStack>
    </Box>
  );
}

export default ProductList;
