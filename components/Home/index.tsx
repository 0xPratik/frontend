import { Container, Heading } from '@chakra-ui/react';
import React from 'react'
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Navbar from './components/Navbar';

type Props = {}

const index = (props: Props) => {
  return (
    <Container maxWidth={"100%"} padding={0} bg="blackAlpha.900">
      <Navbar />
      <Hero />
      <HomeCards />
      <CTA />
      <Footer />
    </Container>
  );
}

export default index;