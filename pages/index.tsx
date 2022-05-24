import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Container,Box,Heading,Text} from "@chakra-ui/react"
import HomePage  from '../components/Home'
import Hero from '../components/Home/components/Hero'
const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <Hero/>
    </div>
  );
}

export default Home
