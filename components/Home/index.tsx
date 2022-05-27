import { Container, Heading } from '@chakra-ui/react';
import React from 'react'
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Navbar from './components/Navbar';

type Props = {}

const index = (props: Props) => {
  return (
    <Container maxWidth={"100%"} padding={0} bg="blackAlpha.900">
      <Navbar />
      <Hero />
      <HomeCards/>
    </Container>
  );
}

export default index;