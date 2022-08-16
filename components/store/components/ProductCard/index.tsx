import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Tag,
  Image,
  VStack,
  HStack,
  Button,
  LinkOverlay,
  LinkBox,
  Link,
  Flex,
} from "@chakra-ui/react";
import Cart from "../Cart";
import { Category, Product } from "@prisma/client";
import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCart } from "../../../../store/cartStore";
import GatedChip from "../GatedChip";
import CategoryChip from "../CategoryChip";

type ProjectCardProps = {
  product: Product;
};

function ProjectCard({ product }: ProjectCardProps) {
  const [margin, setMargin] = useState<boolean>(false);
  const router = useRouter();
  const cartItems = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);

  console.log("ITEMS IN THE CART ARE", cartItems);

  const checkLength = () => {
    if (product.title.length <= 27) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const len = checkLength();
    setMargin(len);
  }, [margin]);

  console.log("PRODUCTCARD ::THE ID  is", product.id);
  return (
    // <NextLink href={`store/${props.id}`}>
    //   <LinkOverlay>
    <VStack maxW={80} border="1px" borderColor={"#313131"} borderRadius="xl">
      <Box
        backgroundImage={product.image}
        border="1px"
        position={"relative"}
        borderTopLeftRadius={"xl"}
        borderTopRightRadius={"xl"}
        borderColor={"#313131"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize="contain"
        objectFit={"contain"}
        w="full"
        h="220px"
        maxH={"220px"}
        display="flex"
        justifyContent="space-between"
        alignItems={"flex-start"}
        color="black"
        pl={4}
        pt={3}
      >
        <GatedChip name="Token Gated" />
      </Box>

      <VStack px={4} align="flex-start">
        <NextLink href={`store/${product.id}`} passHref>
          <Link
            _active={{
              border: "none",
            }}
            _activeLink={{
              border: "none",
            }}
          >
            <Heading
              fontSize={"18px"}
              paddingBottom={margin ? "18px" : "0px"}
              as="h1"
            >
              {product.title.slice(0, 46)}
            </Heading>
            <Flex
              maxH={8}
              my={2}
              maxW={"250px"}
              overflowX={"auto"}
              whiteSpace="nowrap"
              wrap={"nowrap"}
              _first={{
                marginLeft: 0,
              }}
              _last={{
                marginRight: 0,
              }}
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              align="center"
            >
              <CategoryChip name="T-Shirt" bg="#D2D2D2" color="#4B4B4B" />
              <CategoryChip
                name=" 5 available in Stock"
                bg="#DAE4FF"
                color="#092F90"
              />
            </Flex>
            <Text pb={3}>{product.desc.slice(0, 55)}...</Text>
          </Link>
        </NextLink>
        <HStack
          w="100%"
          pb={4}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box>
            <Text color="#FFA7D2" fontSize={"16px"} fontWeight="500">
              USDC {product.price}
            </Text>
          </Box>
          <Box>
            <Button
              onClick={() => addToCart(product)}
              leftIcon={<Cart />}
              borderColor={"#F23090"}
              bg="#FFF4F9"
              color="#F23090"
              border="1px"
              borderRadius={"full"}
              rounded="400px"
            >
              Add to Cart
            </Button>
          </Box>
        </HStack>
      </VStack>
    </VStack>
    //   </LinkOverlay>
    // </NextLink>
  );
}

export default ProjectCard;
