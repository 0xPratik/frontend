import { Heading, Box, Grid, Flex } from "@chakra-ui/react";
import SideBar from "../../components/Admin/components/SideBar";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface IAdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: IAdminLayoutProps) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session == null) {
      router.push("/admin/login");
    }
  }, [session]);
  return (
    <Flex
      color="white"
      h="100%"
      minH={"100vh"}
      w="100vw"
      maxW="100vw"
      bg="#151515"
    >
      <Box w={"15vw"} minW="20vw" bg={"#181717"}>
        <SideBar />
      </Box>
      <Box flex={1}>{children}</Box>
    </Flex>
  );
}

export default AdminLayout;
