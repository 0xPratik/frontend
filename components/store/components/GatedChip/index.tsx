import { Box, Text } from "@chakra-ui/react";
import React from "react";

type GatedChipProps = {
  name: string;
};

function GatedChip({ name }: GatedChipProps) {
  return (
    <Box
      position={"absolute"}
      transform={"translateY(-1rem)"}
      top={0}
      left={0}
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      borderRadius={"full"}
      bg="#092F90"
      color="white"
      px={3}
      py={1}
    >
      <Text fontWeight={"medium"} fontSize="12px">
        {name}
      </Text>
    </Box>
  );
}

export default GatedChip;
