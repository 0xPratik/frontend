import { Button, Heading, HStack } from "@chakra-ui/react";

import React from "react";
import Logo from "../../common/Logo";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
      <Logo />
      <Button
        onClick={() => router.push("/store")}
        size={"md"}
        variant={"redGradient"}
      >
        Go to App
      </Button>
    </HStack>
  );
};

export default Navbar;
