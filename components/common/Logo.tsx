import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
type Props = {};

const Logo = (props: Props) => {
  return (
    <HStack>
      <Image src="/assets/Logo.svg" width={35} height={35} alt="SolStore" />
      <Heading
        color={"#FFA7D2"}
        fontWeight="800"
        fontSize={"20px"}
        lineHeight="25px"
      >
        SolStore
      </Heading>
    </HStack>
  );
};

export default Logo;
