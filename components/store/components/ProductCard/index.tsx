import React from "react";
import {
  Box,
  Heading,
  Text,
  Tag,
  Image,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Cart from "../Cart";

function ProjectCard() {
  return (
    <VStack border="1px" borderColor={"#313131"} borderRadius="xl">
      <Box
        backgroundImage={
          "https://i0.wp.com/bangla.indiarag.com/wp-content/uploads/2019/01/dummy-product.png?ssl=1"
        }
        border="1px"
        borderTopLeftRadius={"xl"}
        borderTopRightRadius={"xl"}
        borderColor={"#313131"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        w="full"
        h="250px"
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
      <VStack px={4} align="flex-start">
        <Heading fontSize={"18px"} as="h1">
          Product Name
        </Heading>
        <HStack spacing={2}>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            px={3}
            py={1}
            bg="#D2D2D2"
            borderRadius="full"
          >
            <Text fontWeight={"400"} fontSize="12px" color={"#4B4B4B"}>
              Category
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            px={3}
            py={1}
            bg="#DAE4FF"
            borderRadius="full"
          >
            <Text fontWeight={"400"} fontSize="12px" color={"#092F90"}>
              5 available in Stock
            </Text>
          </Box>
        </HStack>
        <Text pb={3}>This is the Desc of the Product i have to write</Text>
        <HStack
          w="100%"
          pb={4}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box>
            <Text color="#FFA7D2" fontSize={"16px"} fontWeight="500">
              USDC 0.2
            </Text>
          </Box>
          <Box>
            <Button
              leftIcon={<Cart />}
              borderColor={"#F23090"}
              bg="#FFF4F9"
              color="#F23090"
              border="1px"
            >
              Add to Cart
            </Button>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default ProjectCard;
