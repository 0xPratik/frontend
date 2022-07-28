import React from "react";
import { Heading, Box, Grid, Flex } from "@chakra-ui/react";
import SideBar from "../../components/Admin/components/SideBar";

interface IAdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: IAdminLayoutProps) {
  return (
    <Flex color="white" h="100%" minH={"100vh"} w="100vw" bg="#151515">
      <Box w={"20vw"} bg={"#181717"}>
        <SideBar />
      </Box>
      <Box flex={1}>{children}</Box>
    </Flex>
  );
}

export default AdminLayout;
