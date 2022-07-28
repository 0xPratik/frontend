import { Circle } from "@chakra-ui/react";
import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function BackButton() {
  const router = useRouter();
  return (
    <Circle
      size="40px"
      color="white"
      border="1px"
      onClick={() => router.back()}
      borderColor={"white"}
    >
      <ArrowBackIcon />
    </Circle>
  );
}

export default BackButton;
