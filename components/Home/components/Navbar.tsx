import { Button, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
      <HStack>
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
      <Button variant={"pinkGradient"}>Button Here</Button>
    </HStack>
  );
};

export default Navbar;
