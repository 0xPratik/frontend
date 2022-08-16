import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Container,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { postData } from "../../../utils/index";

type Props = {};

function Cta({}: Props) {
  const [loading, setloading] = useState<boolean>(false);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        setloading(true);
        const res = await postData("email", values);
        console.log(res);
        setloading(false);
        toast({
          title: "Thanks for believing in us",
          status: "success",
          isClosable: true,
          variant: "subtle",
        });
      } catch (error) {
        console.error("CTA", error);
        setloading(false);
        toast({
          title: "Something Went Wrong Try Again",
          status: "error",
          isClosable: true,
          variant: "subtle",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container id="cta" maxW={"container.xl"} padding={0}>
        <Flex
          borderRadius={"lg"}
          my="20"
          h="25vh"
          bgGradient="linear(to-tr, #ff11bc, #e935ca, #d148d6, #b856dd, #9c61e2, #7978f3, #4f8bfc, #009bff, #00b8ff, #00d0f4, #00e2ca, #36ef96)"
          color="white"
          align="center"
          justify={"center"}
          flexDir={"column"}
        >
          <Text mb="5">Submit your email to stay in the loop</Text>
          <Flex
            align="center"
            w="50%"
            bg="white"
            borderRadius={"full"}
            px={3}
            pl={6}
            py={2}
          >
            <Input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              size="lg"
              fontWeight={"400"}
              color="black"
              variant="unstyled"
              onChange={formik.handleChange}
              placeholder="eg: name@mail.com"
            />
            <Button
              color="white"
              px={8}
              py={6}
              isLoading={loading}
              rounded="400px"
              bgGradient="linear(to-r,#C12020,#D6096E)"
              _hover={{
                bgGradient: "linear(to-l,#C12020,#D6096E)",
                boxShadow: "md",
              }}
              _active={{
                bgGradient: "linear(to-l,#C12020,#D6096E)",
                boxShadow: "md",
              }}
              _focus={{
                bgGradient: "linear(to-l,#C12020,#D6096E)",
                boxShadow: "md",
              }}
              type="submit"
            >
              Send me updates
            </Button>
          </Flex>
        </Flex>
      </Container>
    </form>
  );
}

export default Cta;
