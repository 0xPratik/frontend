import React from "react";
import { Heading, Text, HStack, Box, Button } from "@chakra-ui/react";
import BackButton from "../../Product/components/BackButton";
import Nav from "./components/Nav";
import Form from "./components/Form";

function CreatePage() {
  return (
    <Box px={8}>
      <Nav />
      <Form />
    </Box>
  );
}

export default CreatePage;
