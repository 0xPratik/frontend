import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  Center,
  VStack,
  Button,
  HStack,
  Circle,
  LinkBox,
  LinkOverlay,
  Select,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Cart from "../store/Icons/Cart";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Lock from "../store/Icons/Lock";
import { Product } from "@prisma/client";
import axios from "axios";
import { useAxios, Methods } from "../../hooks/useAxios";
import ConnectWallet from "../store/components/ConnecWallet";
import { useWallet } from "@solana/wallet-adapter-react";

import { useRouter } from "next/router";

import BackButton from "./components/BackButton";
import { useCart } from "../../store/cartStore";

type ProductDetailsPageProps = {
  product: Product;
};

function ProductDetailsPage({ product }: ProductDetailsPageProps) {
  const router = useRouter();
  const addToCart = useCart((state) => state.addToCart);
  const cartItems = useCart((state) => state.cart);
  const { connected } = useWallet();
  console.log("IS CONNECTED", connected);
  console.log("CART ITEMS", cartItems);

  return (
    <Box py={8} px={16} bg="#1f1f1f">
      <VStack spacing={8} alignItems={"flex-start"}>
        <BackButton />

        <SimpleGrid w="100%" columns={2} spacing={8}>
          <Box
            backgroundImage={product?.image}
            border="1px"
            borderTopLeftRadius={"xl"}
            borderTopRightRadius={"xl"}
            borderColor={"#313131"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize="contain"
            w="full"
            h="full"
            display="flex"
            justifyContent="space-between"
            alignItems={"flex-start"}
            color="black"
            pl={4}
            pt={3}
          >
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              borderRadius={"full"}
              bg="#092F90"
              color="white"
              px={3}
              py={2}
            >
              <Text fontWeight={"medium"} fontSize="12px">
                Token Gated - Limited
              </Text>
            </Box>
          </Box>
          <Box color="white">
            <VStack align={"flex-start"}>
              <Heading py={"10px"}>{product?.title}</Heading>
              <HStack spacing={2}>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  borderRadius={"full"}
                  bg="#E1FFE8"
                  px={"13px"}
                  py={"6.5px"}
                >
                  <Text fontWeight={"medium"} color="#2F8944" fontSize="14px">
                    Category
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  borderRadius={"full"}
                  bg="#FFE7E7"
                  color="#D71414"
                  px={"13px"}
                  py={"6.5px"}
                >
                  <Text fontWeight={"medium"} color="#D71414" fontSize="14px">
                    10 available in stock
                  </Text>
                </Box>
              </HStack>
              <Box pt={9}>
                <Text fontSize={"16px"}>{product?.desc}</Text>
              </Box>
              <Box pt={4} pb={20}>
                <Heading size="lg" color="#FFA7D2">
                  {" "}
                  USDC {product?.price}
                </Heading>
              </Box>
              <HStack
                w="full"
                py={5}
                px={4}
                border="1px"
                bg="#2c2b2b"
                borderColor={"#313131"}
                borderRadius="base"
              >
                <Lock />
                <Text color="#FFFFFF">
                  This item is locked. Connect your wallet to purchase{" "}
                </Text>
              </HStack>
              <Box py={6}>
                <Text fontSize={"16px"}>Quantity</Text>
              </Box>
              <HStack w="100%" align={"center"} justify="space-between">
                <Box color="white" bg="black">
                  <Select
                    color={"white"}
                    w="80px"
                    variant="filled"
                    placeholder="1"
                    bg="#2E2E2E"
                  >
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Select>
                </Box>
                <Box>
                  {connected ? (
                    <Button
                      onClick={() => addToCart(product)}
                      leftIcon={<Cart />}
                      borderColor={"#F23090"}
                      bg="#FFF4F9"
                      color="#F23090"
                      border="1px"
                      borderRadius={"full"}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <ConnectWallet />
                  )}
                </Box>
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>
        <Box pt={16}>
          <Text color="white">Related Products</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default ProductDetailsPage;
