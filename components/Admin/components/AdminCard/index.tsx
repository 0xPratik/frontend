import React from "react";
import { Box, Image, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import WalletIcon from "../../../common/icons/Wallet";

type AdminCardProps = {
  icon: React.ReactNode;
  text: string;
  heading: string;
};

function AdminCard({ icon, text, heading }: AdminCardProps) {
  return (
    <HStack bg="#272727" color="#1F1F1F" w={"full"} px={6} py={8}>
      <Box>{icon}</Box>
      <Box>
        <Text
          fontWeight={400}
          lineHeight={"20px"}
          fontSize={"16px"}
          color="#6a6a6a "
        >
          {text}
        </Text>
        <Heading fontWeight={500} lineHeight={"40px"} fontSize={"32px"}>
          {heading}
        </Heading>
      </Box>
    </HStack>
  );
}

export default AdminCard;
