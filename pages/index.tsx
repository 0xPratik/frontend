import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Container,Box,Heading,Text} from "@chakra-ui/react"
import HomePage  from '../components/Home'
const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default Home
