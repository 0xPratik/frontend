import React from "react";
import { Heading, Text, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import AdminNav from "./components/Nav";
import AdminCardContainer from "./components/AdminCardContainer";
import OrderTable from "./components/OrderTable";

function Adminpage() {
  return (
    <Box px={8}>
      <AdminNav />
      <AdminCardContainer />
      <Box maxW="100vw" mt={8}>
        <OrderTable />
      </Box>
    </Box>
  );
}

export default Adminpage;
