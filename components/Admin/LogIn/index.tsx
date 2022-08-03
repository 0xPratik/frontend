import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  VStack,
  HStack,
  Circle,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import Logo from "../../common/Logo";
import Google from "../../store/Icons/Google";
import Twitter from "../../store/Icons/Twitter";
import { useSession, signIn, signOut } from "next-auth/react";

function MainLoginPage() {
  const { data: session } = useSession();
  console.log("THIS IS DATA SESSION", session);
  const [mail, setMail] = useState<string>("");
  console.log(mail);
  return (
    <Flex
      direction={"column"}
      align="center"
      h="100%"
      minH={"100vh"}
      w="100vw"
      bg="#151515"
      pt={20}
    >
      <Box pb={16}>
        <Logo />
      </Box>
      <Flex
        align="center"
        justify={"center"}
        direction="column"
        bg={"#252525"}
        p={8}
        minW="35vw"
        borderRadius="base"
      >
        <Heading fontSize={"20px"} pb={10}>
          Continue with
        </Heading>
        <HStack spacing={10}>
          <Circle
            bg="#2E2E2E"
            size="55px"
            _hover={{
              bg: "#1f1f1f",
              cursor: "pointer",
            }}
            onClick={() => signIn("google")}
          >
            <Google w={6} h={6} />
          </Circle>

          <Circle
            bg="#2E2E2E"
            size="55px"
            _hover={{
              bg: "#1f1f1f",
              cursor: "pointer",
            }}
            onClick={() => signIn("github")}
          >
            <Twitter w={6} h={6} />
          </Circle>
        </HStack>
      </Flex>
      <HStack align="center" py={6}>
        <Circle>
          <Text fontWeight={"bold"}>Or</Text>
        </Circle>
      </HStack>
      <VStack minW="35vw" p={6} bg={"#252525"} borderRadius="base">
        <Text fontWeight={"bold"}>Login with Email</Text>
        <Box pt={6}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="saria@gmail.com"
              onChange={(e: any) => setMail(e.target.value)}
            />
            <FormHelperText>
              A code will be sent to the email provided to log in with
            </FormHelperText>
          </FormControl>
          <Button
            mt={8}
            variant={"redGradient"}
            w="full"
            onClick={() => signIn("email", { email: mail })}
          >
            Send Code
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
}

export default MainLoginPage;
