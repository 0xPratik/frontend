import React from "react";
import Nav from "./components/Nav";
import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import MainContainer from "./components/MainContainer";
import Category from "./components/category";
import ProductContainer from "./components/ProductContainer";

function StorePage() {
  return (
    <Box h="100%" pb={20} w="100vw" bg="#1f1f1f">
      <Nav />
      <MainContainer>
        <Heading>Explore</Heading>
        <Category />
        <ProductContainer />
      </MainContainer>
    </Box>
  );
}

export default StorePage;
