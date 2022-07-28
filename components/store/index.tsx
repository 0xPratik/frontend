import React from "react";
import Nav from "./components/Nav";
import { Heading, Box } from "@chakra-ui/react";
import MainContainer from "./components/MainContainer";
import Category from "./components/category";
import ProductContainer from "./components/ProductContainer";
import Footer from "../Home/components/Footer";
import { Product } from "@prisma/client";

type StorePageProps = {
  products: Product[];
};

function StorePage({ products }: StorePageProps) {
  return (
    <MainContainer>
      <Heading>Explore</Heading>
      <Category />
      <ProductContainer products={products} />
    </MainContainer>
  );
}

export default StorePage;
