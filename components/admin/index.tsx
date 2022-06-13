import { Box, Flex, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

type Props = {};

function AdminHome({}: Props) {
  return (
    <Box
      style={{
        backgroundColor: "#151515",
      }}
    > 
      <Stack   direction={"row"}>
        <Stack>
          <SideBar />
        </Stack>
        <Stack w="100%" margin={0} direction={"column"}>
          <Box>
            <Navbar />
          </Box>

          <Box bg={"#2a2a2a"} color="black" height={""} w="full" h="full"></Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AdminHome;
