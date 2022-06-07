import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  Button,
  GridItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

type Props = {};
type CardProps = {
  heading: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
};
const Card = (props: CardProps) => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <GridItem colSpan={colSpan}>
      <VStack
        bg={`${props.color}`}
        color="#000000"
        // py={[10, 20]}
        py={"auto"}
        boxShadow="lg"
        m="4"
        borderRadius="xl"
        spacing={8}
        justify="center"
        align="center"
        height={["430px", "500px"]}
      >
        {/* <img src={props.image} />
         */}
        <Image
          boxSize={['100','100']}
          objectFit="cover"
          src={props.image}
          alt="Dan Abramov"
        />
        <Heading size="lg" px={10} fontWeight={"800"} textAlign="center">
          {props.heading}
        </Heading>
        <Text px="8" textAlign={"center"} fontWeight="400" color="#4B3C06">
          {props.description}
        </Text>
      </VStack>
    </GridItem>
  );
};
const HomeCards = (props: Props) => {
  return (
    <VStack spacing={20}>
      <Heading color={"#ffffff"} textAlign={"center"} fontWeight={"800"}>
        Super packed with features just for you
      </Heading>
      <Container maxW={"container.xl"} padding={0}>
        <SimpleGrid columns={2} columnGap={10} rowGap={[2,10]} w="full">
          <Card
            heading={"Token Gated Exclusive Products and Discounts"}
            description={
              "Give Exclusive Access to your products and provide discounts to your customers for Holding certain amount of token in their Wallet."
            }
            image={"/assets/cardicon/Key.svg"}
            color={"#FBCB24"}
            textColor={"#4B3C06"}
          />
          <Card
            heading={"NFT Gated Exclusive Products and Discounts"}
            description={
              "Give your customers exclusive access and discounts to your Product for holding an NFT in their Wallet."
            }
            image={"/assets/cardicon/Group 23.svg"}
            color={"#1ED086"}
            textColor={"#0A482E"}
          />
          <Card
            heading={"Token Swaps Using Jupiter"}
            description={
              "Allow your Customers to pay in any SPL Token and we will make sure you get it in USDC"
            }
            image={"/assets/cardicon/Group 24.svg"}
            color={"#FF75B1"}
            textColor={"#621543"}
          />
          <Card
            heading={"NFT Coupons"}
            description={
              "Give Coupons as NFT to your Customers so that they can use it later to get Discounts"
            }
            image={"/assets/cardicon/Group 25.svg"}
            color={"#67B1F5"}
            textColor={"#153654"}
          />
          <Card
            heading={"Pay Later using Solend"}
            description={
              "You can easily Borrow Tokens from Solend and use them to pay directly from the Store Front"
            }
            image={"/assets/cardicon/Group 26.svg"}
            color={"#EEC485"}
            textColor={"#593E15"}
          />
          <Card
            heading={"On-chain refunds for items which are not Dispatched"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 27.svg"}
            color={"#72FFE6"}
            textColor={"#3E500C"}
          />
          <Card
            heading={"Composable Merchant Dashboard"}
            description={
              "we are going to offer a dashboard which can be used to manage your store and your products with all the web3 features that you would like to add or remove."
            }
            image={"/assets/cardicon/Group 28.svg"}
            color={"#72FFE6"}
            textColor={"#0E443A"}
          />
          <Card
            heading={"NFT Rewards"}
            description={
              "If you wish to reward your customer's with NFT for purchasing your product then its possible with us."
            }
            image={"/assets/cardicon/Group 29.svg"}
            color={"#DF8EFC"}
            textColor={"#4D1E5E"}
          />
        </SimpleGrid>
      </Container>
    </VStack>
  );
};

export default HomeCards;
