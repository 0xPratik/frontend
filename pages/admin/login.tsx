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
import Logo from "../../components/common/Logo";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";
type Props = {};

const Login = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <VStack
      height={"100vh"}
      bgGradient="linear(to-b, '#111111', yellow.400, pink.200)"
    >
      <Box py="10" display={["none", "block"]}>
        <Logo />
      </Box>
      <Box
        w={["full", "sm", "md", "lg"]}
        bg={"#1F1F1F"}
        p={["5", "10"]}
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
              Login
            </Heading>
            <Text color={"#8F8F8F"}>
              Provide your details to access your account
            </Text>
          </VStack>

          <Stack w="full" spacing={8}>
            <FormControl>
              <FormLabel variant={"darklabel"}>Email Address</FormLabel>
              <Input
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
              <Link href="#">
                <a>
                  {" "}
                  <Text py="2" textAlign={"right"}>
                    Forgot Password
                  </Text>
                </a>
              </Link>
            </FormControl>
          </Stack>
          <Stack w={"100%"} spacing={5}>
            <Button width="100%" size={"xl"} variant={"pinkGradient"}>
              Login
            </Button>
            <Text textAlign={"center"} color={"#CFCFCF"}>
              Don't have an account?{" "}
              <Link href={"/signup"}>
                <a
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Sign Up Here
                </a>
              </Link>{" "}
            </Text>
          </Stack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Login;
