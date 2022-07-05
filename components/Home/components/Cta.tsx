import React from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Container,
  Input,
  Button,
} from "@chakra-ui/react";

function Cta() {
  return (
    <Container maxW={"container.xl"} padding={0}>
      <Flex
        borderRadius={"lg"}
        my="20"
        h="20vh"
        bg="pink.400"
        color="white"
        align="center"
        justify={"center"}
        flexDir={"column"}
      >
        <Text mb="5">Submit your email to stay in the loop</Text>
        <Flex
          align="center"
          w="50%"
          bg="white"
          borderRadius={"full"}
          px={3}
          py={2}
        >
          <Input
            size="lg"
            color="black"
            variant="unstyled"
            placeholder="eg: name@mail.com"
          />
          <Button
            color="white"
            px={8}
            py={6}
            bgGradient="linear(to-r,#C12020,#D6096E)"
            _hover={{
              bgGradient: "linear(to-l,#C12020,#D6096E)",
              boxShadow: "md",
            }}
          >
            Send me updates
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Cta;
