import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container maxWidth={"100%"} py="20">
      <VStack spacing={9}>
        <Heading>
          <Text
            bgGradient={
              "linear-gradient(270.06deg, #E582FE 0.02%, #8BD1F8 50.01%, #F06E95 101.64%)"
            }
            bgClip="text"
            fontWeight={"800"}
            lineHeight="82px"
            fontSize="66px"
            textAlign="center"
          >
            Your Solana Powered E-Commerce Store
          </Text>
        </Heading>
        <Text
          px={[0, 40, 60]}
          color="#DBDBDB"
          textAlign="center"
          fontSize="22px"
          fontWeight="400"
          lineHeight="36px"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut amet
          inventore dicta impedit aspernatur harum sunt iure nihil ratione
          quibusdam.
        </Text>
        <HStack>
          <Button size={"xl"}  variant={"filled"}>
            Button Here
          </Button>
          <Button size={"xl"} variant={"outlined"}>
            Button Here
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Hero;
