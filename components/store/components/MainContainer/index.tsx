import React from "react";
import { Flex, Box, HStack, VStack } from "@chakra-ui/react";

interface IMainContainer {
  children: React.ReactNode;
}

function MainContainer({ children }: IMainContainer) {
  return (
    <VStack
      align="flex-start"
      justify={"flex-start"}
      spacing="46px"
      mx={20}
      my={20}
      color="white"
      maxW="100vw"
      wrap={"wrap"}
    >
      {children}
    </VStack>
  );
}

export default MainContainer;
