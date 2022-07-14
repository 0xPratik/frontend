import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import Nav from "../../components/store/components/Nav";
import Footer from "../../components/Home/components/Footer";

interface IStoreLayoutProps {
  children: React.ReactNode;
}

function StoreLayout({ children }: IStoreLayoutProps) {
  return (
    <Box h="100%" minH={"100vh"} w="100vw" bg="#1f1f1f">
      <Nav />
      {children}
      <Footer />
    </Box>
  );
}

export default StoreLayout;
