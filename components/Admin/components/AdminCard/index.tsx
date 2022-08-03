import React from "react";
import { Box, Image, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import WalletIcon from "../../Icons/Card/Wallet";

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
        <Text fontSize={"16px"} color="#6a6a6a ">
          {text}
        </Text>
        <Heading fontSize={"32px"}>{heading}</Heading>
      </Box>
    </HStack>
  );
}

export default AdminCard;
