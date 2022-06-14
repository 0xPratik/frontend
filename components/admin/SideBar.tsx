import {
  Avatar,
  Box,
  Heading,
  HStack,
  Spacer,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../common/Logo";

type Props = {};
const SideBarItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: "dashboard.svg",
  },
  {
    name: "Products",
    href: "/admin/dashboard",
    icon: "bag.svg",
  },
  {
    name: "User Complaints",
    href: "/admin/user-complaints",
    icon: "user-complaints.svg",
  },
  {
    name: "Sales",
    href: "/admin/sales",
    icon: "user-complaints.svg",
  },
  {
    name: "Coupons",
    href: "/admin/coupons",
    icon: "coupons.svg",
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: "settings.svg",
  }
];
const SideBar = (props: Props) => {
  return (
    <Box bg="#181717">
      <VStack
        w={"xs"}
        h={"100vh"}
        overflow={"scroll"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
            borderRadius: "8px",
            backgroundColor: `rgba(255, 255, 255, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(255, 255, 255, 0.05)`,
          },
        }}
      >
        <Box py="5" pt={"12"}>
          <Logo />
        </Box>
        <Box>
          <HStack>
            <Box>
              <Avatar
                background="transparent"
                border={"none"}
                src="/assets/admin/demoavatar.png"
              />
            </Box>
            <Box padding={1}>
              <Heading
                fontFamily={"Lexend"}
                fontSize="1.125rem"
                fontWeight="500"
                color="#ffffff"
              >
                Michael Jordan
              </Heading>
            </Box>
          </HStack>
        </Box>

        <VStack py={6} spacing={6}>
          {SideBarItems.map((item, index) => {
            return (
              <Box
                w={"246px"}
                key={index}
                borderRadius={200}
                bg={`${item.name === "Dashboard" ? "#1F1F1F" : "transparent"}`}
              >
                <HStack
                  paddingLeft={"8"}
                  display={"flex"}
                  h={"64px"}
                  alignItems="center"
                  spacing={4}
                >
                  <Image src={`/assets/admin/${item.icon}`} />
                  <Heading fontWeight={500} fontSize="1.125rem">
                    {item.name}
                  </Heading>
                </HStack>
              </Box>
            );
          })}
        </VStack>
        <Spacer />
        <Box  w={"246px"} borderRadius={200} bg={"transparent"}>
          <HStack
            paddingLeft={"8"}
            display={"flex"}
            h={"64px"}
            alignItems="center"
            spacing={4}
          >
            <Image src={"/assets/admin/logout.svg"} />
            <Heading fontWeight={500} fontSize="1.125rem">
              Log out
            </Heading>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default SideBar;
