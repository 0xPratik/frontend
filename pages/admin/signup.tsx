import {
  Box,
  Heading,
  VStack,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Logo from "../../components/common/Logo";
type Props = {};

const SignUp = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <VStack
      height={"100vh"}
      bgGradient="linear(to-b, '#111111', yellow.400, pink.200)"
      _before={{
        content: '""',
        bgImage: "url('/assets/bg/Group 6.svg')",
        pos: "absolute",
        top: "65%",
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Box py="10" display={["none", "block"]}>
        <Logo />
      </Box>
      <Box
        w={["full", "sm", "md", "lg"]}
        bg={"#1F1F1F"}
        p={["5", "10"]}
        height={["full", "auto"]}
        opacity={"0.9"}
      >
        <VStack spacing={12}>
          <VStack spacing={5}>
            <Box py="6" display={["block", "none"]}>
              <Logo />
            </Box>
            <Heading
              fontSize={["18px", "30px"]}
              textAlign={"center"}
              fontWeight={"600"}
              lineHeight="37.5px"
              color={"#ffffff"}
            >
              Sign Up
            </Heading>
            <Text color={"#8F8F8F"}>
              Provide your details to create a free account
            </Text>
          </VStack>

          <Stack w="full" spacing={8}>
            <FormControl>
              <FormLabel variant={"darklabel"}>Username</FormLabel>
              <Input
                backgroundColor={"#2E2E2E"}
                h="3.75rem"
                placeholder="eg. John Doe"
                variant={"darkinput"}
                _placeholder={{ color: "#8F8F8F" }}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel variant={"darklabel"}>Email Address</FormLabel>
              <Input
                backgroundColor={"#2E2E2E"}
                h="3.75rem"
                placeholder="name@email.com"
                variant={"darkinput"}
                _placeholder={{ color: "#8F8F8F" }}
                type="email"
              />
            </FormControl>

            <FormControl>
              <FormLabel variant={"darklabel"}>Password</FormLabel>
              <InputGroup>
                <Input
                  backgroundColor={"#2E2E2E"}
                  h="3.75rem"
                  placeholder="Enter your password"
                  variant={"darkinput"}
                  _placeholder={{ color: "#8F8F8F" }}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    _active={{
                      bg: "transparent",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    bg="transparent"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
          <Stack w={"100%"} spacing={5}>
            <Button width="100%" size={"xl"} variant={"pinkGradient"}>
              Sign Up
            </Button>
            <Text textAlign={"center"} color={"#CFCFCF"}>
              Already have an account?{" "}
              <Link href={"/login"}>
                <a
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Log in here
                </a>
              </Link>{" "}
            </Text>
          </Stack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SignUp;
