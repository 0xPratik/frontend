import {
  Text,
  Heading,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Spacer,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    // <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      p={[0, 10, 30]}
      justify={"space-between"}
      marginTop={["10", "20"]}
    >
      <HStack px={["7", "0"]}>
        <Image src="/assets/Logo.svg" width={50} height={50} />

        <Heading
          color={"#FFA7D2"}
          fontWeight="800"
          fontSize={"20px"}
          lineHeight="25px"
        >
          Sakura Protocol
        </Heading>
      </HStack>
      <Box w="150" px={["7", "0"]}>
        <Image src="/assets/Badge.svg" width={"150%"} height="100%" />
      </Box>
      <Flex
        direction={"column"}
        justify="center"
        align="center"
        justifyContent={"center"}
      >
        <Box>
          <Text color="white" mb={1}>
            Follow us
          </Text>
          <HStack>
            <Image src="/assets/twitter.svg" />
            <Image src="/assets/discord.svg" />
          </HStack>
        </Box>
      </Flex>
    </Flex>
    // </HStack>
  );
};

export default Footer;
