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
  function sendMail() {
    var link = "mailto:pratiksaria2000@gmail.com";
    window.location.href = link;
  }
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
            fontSize={["50px", "50px", "50px", "50px", "60px"]}
            textAlign="center"
          >
            Your Solana Powered E-Commerce Store
          </Text>
        </Heading>
        <Text
          px={[0, 40, 60]}
          color="#DBDBDB"
          textAlign="center"
          fontSize={["16px", "16px", "22px"]}
          fontWeight="400"
          lineHeight="36px"
        >
          Spin up your E-commerce Web3 Store with awesome features. Make sure to
          register yourselves for the launch.
        </Text>
        <HStack>
          <Button
            as={"a"}
            href="#cta"
            size={"xl"}
            bg="white"
            variant={"outlined"}
            mr={4}
          >
            Register Now
          </Button>
          <Button
            size={"xl"}
            bg="black"
            color="white"
            border="1px"
            borderColor={"white"}
            variant={"outlined"}
            onClick={() => sendMail()}
          >
            Contact us
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Hero;
