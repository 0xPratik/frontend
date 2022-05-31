import { SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
type Props = {};
const Card = (props: Props) => {
  return (
    <Center>
      <Box
        maxW={"381px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"xl"}
        overflow={"hidden"}
        borderWidth={"0.5px"}
        position="relative"
      >
        <IconButton
          _active={{
            bg: "transparent",
            border: "none",
          }}
          _focus={{ bg: "transparent", border: "none" }}
          _hover={{
            bg: "transparent",
          }}
          bg={"#2B2B2B"}
          position={"absolute"}
          zIndex={500}
          right={"0"}
          aria-label="like button"
          icon={<Image w={50} src="\assets\cardicon\Group 3.png" />}
          // icon={<SearchIcon />}
        />
        <VStack spacing={4}>
          <Image
            h={"226px"}
            w={"full"}
            src="/assets/store/tshirt.png"
            objectFit={"cover"}
          />

          <VStack spacing={8} px={4} py={5}>
            <Stack spacing={2} align={"left"} mb={5}>
              <Text
                color={"#ffffff"}
                textAlign={"left"}
                fontSize={"18px"}
                fontWeight={600}
              >
                Product Name Here
              </Text>
              <HStack>
                {[0, 1, 2, 3].map((i) => (
                  <Text
                    key={i}
                    fontSize={"12"}
                    color="#4B4B4B"
                    bg={"#D2D2D2"}
                    px={2}
                    py={1}
                    borderRadius={"100px"}
                    fontWeight={"400"}
                  >
                    Category {}
                  </Text>
                ))}
              </HStack>
              <Text color={"#EBEBEB"} fontSize={"15px"} lineHeight="21px">
                Description of the product is shown here and it spans over a
                maximum of three
              </Text>
            </Stack>

            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box alignSelf={"center"}>
                <Text
                  color={"#FFA7D2"}
                  verticalAlign={"center"}
                  fontWeight={500}
                  lineHeight={"20px"}
                >
                  USDC 0.20
                </Text>
              </Box>

              <Box>
                <Button
                  leftIcon={<Image src="\assets\cardicon\cart 1.svg" />}
                  variant={"addtocart"}
                >
                  Add to cart
                </Button>
              </Box>
            </Flex>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};
export default Card;
