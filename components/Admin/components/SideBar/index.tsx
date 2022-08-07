import React from "react";
import { Box, Heading, Flex, Text, Button, Avatar } from "@chakra-ui/react";
import Logo from "../../../common/Logo";
import DashboardIcon from "../../Icons/Dashboard";
import ProductIcon from "../../Icons/Products";
import CouponIcon from "../../Icons/Coupon";
import LogOutIcon from "../../Icons/Logout";

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

function SideBar() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      w="100%"
      bg={"#181717"}
      py={14}
      h="full"
    >
      <Flex direction={"column"}>
        <Box>
          <Logo />
        </Box>
        <Flex mt={8} align="center" justify={"flex-start"}>
          <Avatar mr={3} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Heading fontWeight={500} fontSize={"18px"}>Pratik Saria</Heading>
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
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default SideBar;
