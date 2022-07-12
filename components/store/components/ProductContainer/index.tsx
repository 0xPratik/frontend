import React from "react";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import ProjectCard from "../ProductCard";

function ProductContainer() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
      <GridItem>
        <ProjectCard />
      </GridItem>
    </Grid>
  );
}

export default ProductContainer;
