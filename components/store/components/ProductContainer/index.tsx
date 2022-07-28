import React, { useState, useEffect } from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import ProjectCard from "../ProductCard";
import { Product } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";

type ProductContainerProps = {
  products: Product[];
};

function ProductContainer({ products }: ProductContainerProps) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" rowGap={8} columnGap={6}>
      {products?.map((product, i) => {
        return (
          <GridItem key={i}>
            <ProjectCard product={product} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default ProductContainer;
