import { Button, Heading, HStack, Tooltip } from "@chakra-ui/react";

import React from "react";
import Logo from "../../common/Logo";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
      <Logo />
      <Tooltip hasArrow label="App Launching Soon" shouldWrapChildren>
        <Button
          onClick={() => router.push("/store")}
          size={"md"}
          variant={"redGradient"}
          disabled={true}
        >
          Go to App
        </Button>
      </Tooltip>
    </HStack>
  );
};

export default Navbar;
