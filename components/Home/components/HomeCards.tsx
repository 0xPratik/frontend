import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  Button,
  GridItem,
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
        py={[10,20]}
        boxShadow="lg"
        m="4"
        borderRadius="xl"
        spacing={8}
      >
        <img src={props.image} />
        <Heading size="lg" fontWeight={"800"} textAlign="center">
          Token Gated Exclusive Products
        </Heading>
        <Text px="8" textAlign={"center"} fontWeight="400" color="#4B3C06">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci
          aliquet diam, viverra porttitor ut. Pharetra, id urna, in non
          ullamcorper. Orci aenean.
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
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Key.svg"}
            color={"#FBCB24"}
            textColor={"#4B3C06"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 23.svg"}
            color={"#1ED086"}
            textColor={"#0A482E"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 24.svg"}
            color={"#FF75B1"}
            textColor={"#621543"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 25.svg"}
            color={"#67B1F5"}
            textColor={"#153654"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 26.svg"}
            color={"#EEC485"}
            textColor={"#593E15"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 27.svg"}
            color={"#72FFE6"}
            textColor={"#3E500C"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
            }
            image={"/assets/cardicon/Group 28.svg"}
            color={"#72FFE6"}
            textColor={"#0E443A"}
          />
          <Card
            heading={"Token Gated Exclusive Products"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci aliquet diam, viverra porttitor ut. Pharetra, id urna, in non ullamcorper. Orci aenean."
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
