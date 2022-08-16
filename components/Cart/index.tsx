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
  GridItem,
  Divider,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import BackButton from "../Product/components/BackButton";
import CartCard from "./components/CartCard";
import OfferCard from "./components/OfferCard";
import { useCart } from "../../store/cartStore";
import OrderSummary from "./components/OrderSummary";

function Cart() {
  const CartItems = useCart((state) => state.cart);
  console.log("ITEMS IN THE CART", CartItems);
  return (
    <Box py={8} px={16} bg="#1f1f1f">
      <VStack spacing={5} alignItems={"flex-start"}>
        <HStack>
          <BackButton />
          <Text px={2} color="white">
            Back
          </Text>
        </HStack>
        <Heading color="white">Cart</Heading>
        <Grid templateColumns={"auto 400px"} gridGap={24} w="100%">
          <GridItem>
            <Box py={7}>
              {CartItems.length !== 0 ? (
                CartItems.map((item) => {
                  return (
                    <>
                      <CartCard
                        key={item.id}
                        id={item.id}
                        imageurl={item.image}
                        name={item.title}
                        price={item.price}
                        quantity={0}
                      />
                      <Divider my={4} borderColor="#313131  " />
                    </>
                  );
                })
              ) : (
                <Heading>Your Cart is Empty</Heading>
              )}
            </Box>
          </GridItem>
          <GridItem>
            <Box mb={4}>
              <OfferCard />
            </Box>
            <Box>
              <OrderSummary />
            </Box>
            {/* <Box>
              <Checkbox />
              <Box color="white">
                I want to get <Link color="#FFA7D2">NFT Coupons</Link> to enjoy
                discounts for later purchases
              </Box>
            </Box> */}
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

export default Cart;
