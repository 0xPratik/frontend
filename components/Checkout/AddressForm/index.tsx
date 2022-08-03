import React from "react";
import {
  Box,
  Heading,
  Input,
  HStack,
  VStack,
  Grid,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  SimpleGrid,
  Button,
  VisuallyHidden,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

function AddressForm() {
  return (
    <Box>
      <Text fontWeight={"bold"} pb={8} fontSize="18px">
        Shipping Details
      </Text>
      <SimpleGrid columns={2} spacingX={10} spacingY={6}>
        <Box>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter First Name" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter last Name" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Street address</FormLabel>
            <Input type="text" placeholder="House number & Street name" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Street address</FormLabel>
            <Input type="text" placeholder="Street Address" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Town/City</FormLabel>
            <Input type="text" placeholder="Enter Town or City Name" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Post Code/ZIP (Optional)</FormLabel>
            <Input type="text" placeholder="House number & Street name" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter Email Address" />
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Phone NO</FormLabel>
            <InputGroup>
              <InputLeftAddon>+253</InputLeftAddon>
              <Input type="number" placeholder="Enter Phone Number" />
            </InputGroup>
            {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
          </FormControl>
        </Box>
      </SimpleGrid>
      <HStack pt={8} align={"flex-end"} w="full" justify={"flex-end"}>
        <Button
          border="1px"
          borderColor={"#F23090"}
          borderRadius="full"
          bg={"#FFF4F9"}
          color="#D6096E"
          fontSize={"12px"}
        >
          Save information
        </Button>
      </HStack>
    </Box>
  );
}

export default AddressForm;
