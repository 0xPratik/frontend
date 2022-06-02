import { Container } from '@chakra-ui/react';
import React from 'react'
import CardView from './components/CardView'
import Navbar from './components/Navbar';

type Props = {}

const index = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <CardView />
    </div>
  );
}

export default index