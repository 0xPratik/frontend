import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
type Props = {};

const Logo = (props: Props) => {
  return (
    <HStack>
      <Image src="/assets/Logo.svg" width={30} height={30} />
      <Heading
        color={"#FFA7D2"}
        fontWeight="800"
        fontSize={"12px"}
        lineHeight="25px"
      >
        Sakura Protocol
      </Heading>
    </HStack>
  );
};

export default Logo;
