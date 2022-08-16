import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Select,
  InputLeftElement,
  InputGroup,
  Textarea,
  useNumberInput,
  Button,
} from "@chakra-ui/react";
import {
  AspectRatio,
  BoxProps,
  Container,
  forwardRef,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import AdminImageIcon from "../../../../common/icons/AdminImage";
import AddReward from "../AddReward";
import TokenGated from "../TokenGated";

const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const ImageInput = () => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  const [image, setImage] = useState<string>("");

  const onImageChange = (e: any) => {
    const [file] = e.target.files;

    setImage(URL.createObjectURL(file));
    console.log("CHECK THIS LOG", e.target.files);
  };

  return (
    <AspectRatio width="64" pb={8} ratio={2 / 1}>
      <Box
        borderColor="#2E2E2E"
        borderStyle="dashed"
        borderWidth="2px"
        rounded="md"
        shadow="sm"
        role="group"
        transition="all 150ms ease-in-out"
        _hover={{
          shadow: "md",
        }}
        as={motion.div}
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        {/* <Stack display="flex" alignItems="center" justify="center">
          <Box height="16" width="12" position="relative">
            {image ? <img src={image} /> : < }
          </Box> */}
        <Stack p="4" textAlign="center" spacing="1">
          <AdminImageIcon />
          {image ? (
            <Text fontWeight="light" color="#8F8F8F">
              Image Added
            </Text>
          ) : (
            <Text fontWeight="light" color="#8F8F8F">
              Drag and drop image file or browse
            </Text>
          )}
        </Stack>
        {/* </Stack> */}

        <Input
          type="file"
          height="100%"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          aria-hidden="true"
          accept=".jpg, .jpeg, .png"
          onChange={onImageChange}
          onDragEnter={startAnimation}
          onDragLeave={stopAnimation}
        />
      </Box>
    </AspectRatio>
  );
};

function Form() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 20,
      min: 1,
      max: 5000,
      precision: 2,
    });

  const formik = useFormik({
    initialValues: {
      category: "",
      price: 0,
      name: "",
      quantity: 0,
      desc: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values));
    },
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        w="70vw"
        bg="#1A1A1A"
        border="1px"
        borderRadius={"base"}
        borderColor="#272727"
        py={12}
        px={10}
      >
        <ImageInput />
        <HStack py={4}>
          <FormControl>
            <FormLabel htmlFor="category" variant="admin">
              Category
            </FormLabel>
            <Select
              name="category"
              id="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              placeholder="Select Category"
              maxW={"400px"}
            >
              <option value="shirts">Shirts</option>
              <option value="jeans">Jeans</option>
              <option value="shoes">Shoes</option>
            </Select>
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="price" variant="admin">
              Price
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                pl={8}
              >
                USDC
              </InputLeftElement>
              <Input
                placeholder="0.00"
                name="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                id="price"
                type={"number"}
                textAlign="right"
                w="200px"
              />
            </InputGroup>
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </HStack>
        <HStack py={4}>
          <FormControl>
            <FormLabel htmlFor="name" variant="admin">
              Product Name
            </FormLabel>
            <Input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
              placeholder="Enter Product Name"
              maxW={"400px"}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="quantity" variant="admin">
              Quantity
            </FormLabel>
            <HStack spacing={0}>
              <Button variant="solid" {...inc}>
                +
              </Button>
              <Input
                variant="admin"
                name="quantity"
                onChange={formik.handleChange}
                value={formik.values.quantity}
                id="quantity"
                {...input}
                width="80px"
                textAlign={"center"}
              />
              <Button variant="solid" {...dec}>
                -
              </Button>
            </HStack>
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </HStack>
        <HStack py={4}>
          <FormControl>
            <FormLabel htmlFor="desc" variant="admin">
              Description (Optional)
            </FormLabel>
            <Textarea
              name="desc"
              onChange={formik.handleChange}
              value={formik.values.desc}
              id="desc"
              placeholder="Enter the Description"
              size="lg"
              maxW={"400px"}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </HStack>
        <HStack spacing={4}>
          <AddReward />
          <TokenGated />
        </HStack>
        <Box pt={6}>
          <Button variant="redGradient" type="submit">
            Create Product
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default Form;
