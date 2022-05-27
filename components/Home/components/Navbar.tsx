import { Button, Heading, HStack } from "@chakra-ui/react";

import React from "react";
import Logo from "../../common/Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack justifyContent="space-between" px={[0, 10, 30]} py="2">
      <Logo/>
      <Button variant={"pinkGradient"}>Button Here</Button>
    </HStack>
  );
};

export default Navbar;
