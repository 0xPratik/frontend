import { Container, Heading } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";
import CTA from "./components/Cta";

type Props = {};

const Index = (props: Props) => {
  return (
    <Container maxWidth={"100%"} padding={0} bg="blackAlpha.900">
      <Navbar />
      <Hero />
      <HomeCards />
      <CTA />
      <Footer />
    </Container>
  );
};

export default Index;
