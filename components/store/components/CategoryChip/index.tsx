import React from "react";
import { Box, Text } from "@chakra-ui/react";

type CategoryChipProps = {
  name: string;
  bg: string;
  color: string;
};

function CategoryChip({ name, bg, color }: CategoryChipProps) {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      px={3}
      py={1}
      bg={bg}
      borderRadius="full"
      mr={4}
    >
      <Text fontWeight={"400"} fontSize="12px" color={color}>
        {name}
      </Text>
    </Box>
  );
}

export default CategoryChip;
