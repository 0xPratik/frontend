import React from "react";
import { Box, Heading, Flex, Text, Button, Avatar } from "@chakra-ui/react";
import Logo from "../../../common/Logo";
import { useSession, signIn, signOut } from "next-auth/react";

import DashboardIcon from "../../../common/icons/Dashboard";
import ProductIcon from "../../../common/icons/Products";
import CouponIcon from "../../../common/icons/Coupon";
import LogOutIcon from "../../../common/icons/Logout";

const SideBarContents = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Products",
    icon: <ProductIcon />,
  },
  {
    name: "Coupons",
    icon: <CouponIcon />,
  },
];

function SideBar({
  name = "Pratik Saria",
  email = "sariapratik@gmail.com",
  image = "https://bit.ly/dan-abramov",
}) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      w="100%"
      bg={"#181717"}
      py={14}
      h="full"
    >
      <Flex direction={"column"} w="80%">
        <Box>
          <Logo />
        </Box>
        <Flex mt={8} align="center" justify={"flex-start"}>
          <Avatar mr={3} name="Dan Abrahmov" src={image} />
          <Heading fontWeight={500} fontSize={"18px"}>
            {name}
          </Heading>
        </Flex>
        <Flex flexGrow={1} mt={10} direction={"column"} align="center">
          {SideBarContents.map((sidebar) => {
            return (
              <Button
                key={sidebar.name}
                justifyContent="flex-start"
                size={"lg"}
                leftIcon={sidebar.icon}
                variant={"admin"}
                colorScheme={"red"}
                w={"full"}
                mb={4}
              >
                {sidebar.name}
              </Button>
            );
          })}
        </Flex>
        <Button
          leftIcon={<LogOutIcon />}
          variant={"admin"}
          w="full"
          colorScheme={"cyan"}
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default SideBar;
