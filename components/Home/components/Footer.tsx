import { Text, Heading, HStack, VStack, Input, InputGroup, InputRightElement, Button, Flex, Spacer, Box } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
type Props = {}

const Footer = (props: Props) => {
  return (
    // <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
    <Flex direction={{ base: "column", md: "row" }} marginTop={["10","20"]}>
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
      <Spacer />
      <Box w="150" px={["7", "0"]}>
        <Image src="/assets/Badge.svg" width={"150%"} height="100%" />
      </Box>

      <Spacer />
      <Flex direction={"column"}  justifyContent={"center"} >
        <div>
          <Text px="3" py="2">Submit your email to stay in the loop</Text>
        </div>

        <InputGroup width={["full", "30rem"]}>
          <Input
            py={"6"}
            borderRadius={"100"}
            bg="#ffffff"
            color={"#787777"}
            _placeholder={{
              color: "#787777",
              fontWeight: "500",
              fontSize: "14.5px",
              lineHeight: "18.43px",
            }}
            size={"lg"}
            type={"text"}
            variant="ctc"
            placeholder="name@mail.com"
          />
          <InputRightElement px="auto" style={{ margin: "4px" }} width="10rem">
            <Button variant={"pinkGradient"}>Send me updates</Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
    // </HStack>
  );
}

export default Footer