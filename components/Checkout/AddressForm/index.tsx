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
import { useFormik } from "formik";

function AddressForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      town: "",
      postalCode: "",
      emailAddress: "",
      phoneNo: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Text fontWeight={"bold"} pb={8} fontSize="18px">
          Shipping Details
        </Text>
        <SimpleGrid columns={2} spacingX={10} spacingY={6}>
          <Box>
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter last Name"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="houseAddress">Street address</FormLabel>
              <Input
                id="houseAddress"
                name="houseAddress"
                type="text"
                placeholder="House number & Street name"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="streetAddress">Street address</FormLabel>
              <Input
                id="streetAddress"
                name="streetAddress"
                type="text"
                placeholder="Street Address"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="town">Town/City</FormLabel>
              <Input
                onChange={formik.handleChange}
                id="town"
                name="town"
                type="text"
                placeholder="Enter Town or City Name"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="postalcode">
                Post Code/ZIP (Optional)
              </FormLabel>
              <Input
                id="postalcode"
                name="postalcode"
                onChange={formik.handleChange}
                type="text"
                placeholder="House number & Street name"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={formik.handleChange}
                placeholder="Enter Email Address"
              />
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="phoneno">Phone NO</FormLabel>
              <InputGroup>
                <InputLeftAddon>+253</InputLeftAddon>
                <Input
                  id="phoneno"
                  type="number"
                  onChange={formik.handleChange}
                  name="phoneno"
                  placeholder="Enter Phone Number"
                />
              </InputGroup>
              {/* <FormHelperText>We&apos;ll never share your email.</FormHelperText> */}
            </FormControl>
          </Box>
        </SimpleGrid>
        <HStack pt={8} align={"flex-end"} w="full" justify={"flex-end"}>
          <Button
            border="1px"
            type="submit"
            borderColor={"#F23090"}
            borderRadius="full"
            bg={"#FFF4F9"}
            color="#D6096E"
            fontSize={"12px"}
            rounded="300px"
          >
            Save information
          </Button>
        </HStack>
      </Box>
    </form>
  );
}

export default AddressForm;
