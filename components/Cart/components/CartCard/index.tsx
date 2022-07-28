import React from "react";
import {
  Box,
  VStack,
  Text,
  Heading,
  CloseButton,
  HStack,
  Image,
  Select,
} from "@chakra-ui/react";
import { useCart } from "../../../../store/cartStore";

type CartCardProps = {
  id: string;
  imageurl: string;
  price: number;
  name: string;
  quantity: number;
};

const CartCard = React.memo(function CartCard({
  imageurl,
  price,
  name,
  quantity = 0,
  id,
}: CartCardProps) {
  const removeFromCart = useCart((state) => state.removeFromCart);
  return (
    <HStack spacing={4} align={"flex-start"} justify="space-between">
      <HStack align="flex-start" w="70%">
        <Box mr={8}>
          <Image
            border="1px"
            borderColor={"red.100"}
            objectFit="contain"
            width="160px"
            height="160px"
            maxWidth="160px"
            maxHeight={"160px"}
            borderRadius={"base"}
            display="block"
            src={imageurl}
            alt={name}
          />
        </Box>
        <VStack spacing={8} align="flex-start">
          <Text color="white" fontSize="18px" fontWeight={"600"}>
            {name}
          </Text>
          <Box>
            <Text mb={2} fontSize={"sm"} color="white">
              Quantity
            </Text>
            <Select
              color={"white"}
              w="80px"
              variant="filled"
              placeholder="1"
              bg="#2E2E2E"
            >
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Select>
          </Box>
        </VStack>
      </HStack>
      <HStack w="30%" align="flex-end" justify={"flex-end"}>
        <Box mr={12} minW="25%">
          <Text color="white" fontSize="18px">
            {" "}
            USDC {price}
          </Text>
        </Box>
        <Box>
          <CloseButton
            onClick={() => removeFromCart(id)}
            size="sm"
            color="white"
          />
        </Box>
      </HStack>
    </HStack>
  );
});

export default CartCard;
