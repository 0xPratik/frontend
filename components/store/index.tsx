import React from "react";
import Nav from "./components/Nav";
import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import MainContainer from "./components/MainContainer";
import Category from "./components/category";

function StorePage() {
  return (
    <Box h="100vh" w="100%" bg="#515151">
      <Nav />
      <MainContainer>
        <Heading>Explore</Heading>
        <Category />
      </MainContainer>
    </Box>
  );
}

export default StorePage;
