import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  SimpleGrid,
  Grid,
  Divider,
  Checkbox,
  Link,
  GridItem,
  Input,
} from "@chakra-ui/react";
import BackButton from "../Product/components/BackButton";
import AddressForm from "./AddressForm";
import ProductList from "./ProductList";
import TotalAmount from "./Total";

function CheckOutpage() {
  return (
    <Box py={8} px={16} bg="#1f1f1f">
      <VStack spacing={5} alignItems={"flex-start"}>
        <HStack>
          <BackButton />
          <Text px={2}>Back</Text>
        </HStack>

        <Grid templateColumns={"auto 500px"} gridGap={20} w="100%">
          <GridItem>
            <Heading pb={6}>Checkout</Heading>
            <AddressForm />
          </GridItem>
          <GridItem>
            <VStack spacing={6}>
              <ProductList />
              <TotalAmount />
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

export default CheckOutpage;
