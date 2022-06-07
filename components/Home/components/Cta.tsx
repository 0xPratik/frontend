import { Flex, Text, InputGroup, Input, InputRightElement, Button, VStack, Container, Center } from "@chakra-ui/react";
import React from 'react'

type Props = {}

const CTA = (props: Props) => {
    return (
      <Container maxW={"container.xl"} marginTop={["10", "20"]}>
            <Center borderRadius={10} bg={"#756BE3"} height={['175px',"250px"]}>
                <VStack w="full" px={ ['2','0']}>
            <div>
              <Text fontSize={['12px','20px']} fontWeight={'500'} px="3" py="2">
                Submit your email to stay in the loop
              </Text>
            </div>

            <InputGroup width={["full", "28rem"]}>
              <Input
                py={"6"}
                borderRadius={"100"}
                bg="#ffffff"
                color={"#787777"}
                _placeholder={{
                  color: "#787777",
                  fontWeight: "500",
                  fontSize: "14.5px",
                  lineHeight: "18.43px",
                }}
                size={"lg"}
                type={"text"}
                variant="ctc"
                placeholder="name@mail.com"
              />
              <InputRightElement
                px="auto"
                style={{ margin: "4px" }}
                width="10rem"
              >
                <Button variant={"pinkGradient"}>Send me updates</Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        </Center>
      </Container>
    );
}

export default CTA;