import { Container, Grid, GridItem, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import Card from './Card';

type Props = {}
const CardView = (props: Props) => {
  return (
    <Container paddingTop={100} maxW={["30em", "48em", "62em", "93em"]}>
      <Grid
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
          <Card key={i} />
        ))}
      </Grid>
    </Container>
  );
}

export default CardView