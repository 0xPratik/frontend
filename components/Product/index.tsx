import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  Center,
  VStack,
  Button,
  HStack,
  Circle,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Lock from "../../components/store/Icons/Lock";

function ProductDetailsPage() {
  return (
    <Box py={8} px={16} bg="#1f1f1f">
      <VStack spacing={8} alignItems={"flex-start"}>
        <Circle size="40px" color="white" border="1px" borderColor={"white"}>
          <ArrowBackIcon />
        </Circle>
        <SimpleGrid w="100%" columns={2} spacing={8}>
          <Box
            backgroundImage={
              "https://i0.wp.com/bangla.indiarag.com/wp-content/uploads/2019/01/dummy-product.png?ssl=1"
            }
            border="1px"
            borderTopLeftRadius={"xl"}
            borderTopRightRadius={"xl"}
            borderColor={"#313131"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            bgSize="contain"
            w="full"
            h="full"
            display="flex"
            justifyContent="space-between"
            alignItems={"flex-start"}
            color="black"
            pl={4}
            pt={3}
          >
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              borderRadius={"full"}
              bg="#092F90"
              color="white"
              px={3}
              py={2}
            >
              <Text fontWeight={"medium"} fontSize="12px">
                Token Gated - Limited
              </Text>
            </Box>
          </Box>
          <Box color="white">
            <VStack align={"flex-start"}>
              <Heading py={"10px"}>Product Name here</Heading>
              <HStack spacing={2}>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  borderRadius={"full"}
                  bg="#E1FFE8"
                  color="#2F8944"
                  px={"13px"}
                  py={"6.5px"}
                >
                  <Text fontWeight={"medium"} fontSize="14px">
                    Category
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  borderRadius={"full"}
                  bg="#FFE7E7"
                  color="#D71414"
                  px={"13px"}
                  py={"6.5px"}
                >
                  <Text fontWeight={"medium"} fontSize="14px">
                    10 available in stock
                  </Text>
                </Box>
              </HStack>
              <Box pt={9}>
                <Text fontSize={"16px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum risus enim arcu quis urna faucibus. Orci non in
                  scelerisque nibh eget tristique laoreet imperdiet. Egestas
                  fames vitae vestibulum habitasse non congue.
                </Text>
              </Box>
              <Box pt={4} pb={20}>
                <Heading size="lg" color="#FFA7D2">
                  {" "}
                  SOL 0.04
                </Heading>
              </Box>
              <HStack
                w="full"
                py={5}
                px={4}
                border="1px"
                bg="#2c2b2b"
                borderColor={"#313131"}
                borderRadius="base"
              >
                <Lock />
                <Text color="#FFFFFF">
                  This item is locked. Connect your wallet to purchase{" "}
                </Text>
              </HStack>
              <Box py={6}>
                <Text fontSize={"16px"}>Quantity</Text>
              </Box>
              <HStack w="100%" align={"center"} justify="space-between">
                <Box color="white" bg="black">
                  <Menu>
                    <MenuButton bg="blackAlpha.100" as={Button}>
                      1
                    </MenuButton>
                    <MenuList>
                      <MenuItem>2</MenuItem>
                      <MenuItem>3</MenuItem>
                      <MenuItem>4</MenuItem>
                      <MenuItem>5</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  <Button colorScheme={"purple"} variant="solid">
                    Connect Wallet
                  </Button>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </SimpleGrid>
        <Box pt={16}>
          <Text color="white">Related Products</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default ProductDetailsPage;
