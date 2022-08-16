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
  Center,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    // <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
    <Flex
      bg="#181717"
      direction={{ base: "column", md: "row" }}
      align="center"
      p={[0, "3", "5"]}
      justify={"space-between"}
      marginTop={["10", "20"]}
    >
      <HStack px={["7", "0"]}>
        <Image src="/assets/Logo.svg" width={35} height={35} />
        <Heading
          color={"#FFA7D2"}
          fontWeight="800"
          fontSize={"20px"}
          lineHeight="25px"
        >
          SolStore
        </Heading>
        <Box w="150" px={["7", "3"]}>
          <Image src="/assets/Badge.svg" width={"75%"} height="100%" />
        </Box>
      </HStack>
      <Flex justify="center" align="center" justifyContent={"center"}>
        <Text color="white" mb={1} mr={4}>
          Follow us
        </Text>
        <Box>
          <HStack>
            <a
              href="https://twitter.com/Solstoreapp"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image src="/assets/twitter.svg" alt="SolStore Twitter" />
            </a>
            <Tooltip hasArrow label="Discord Coming Soon" shouldWrapChildren>
              <Image src="/assets/discord.svg" alt="SolStore Discord" />
            </Tooltip>
          </HStack>
        </Box>
      </Flex>
      <Center>
        <Text fontSize={"md"} color={"gray.300"}>
          &copy; SolStore 2022
        </Text>
      </Center>
    </Flex>
    // </HStack>
  );
};

export default Footer;
