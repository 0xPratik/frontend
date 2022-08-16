import React from "react";
import { Box, Heading, HStack, Text, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const CouponCard = () => {
  return (
    <Box p={6} bg="#221d20" borderRadius={"base"}>
      <HStack justify={"flex-start"} alignItems="flex-start">
        <Image
          src={"https://picsum.photos/200/200"}
          width="80px"
          style={{ borderRadius: "5px" }}
          height="80px"
          alt="Coupon Image"
        />
        <VStack>
          <HStack w="full" align={"center"} justify="space-between">
            <Heading fontSize={"18px"} fontWeight="500">
              Coupon Heading
            </Heading>
            <Button>Use Offer</Button>
          </HStack>
          <Text fontSize={"14px"}>
            Some text to explain what this offer provides is displayed. This
            text should span accros two lines.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

function OfferCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box py={6} px={8} borderRadius="base" bg="#252525">
      <Heading color="white" pb={6} fontSize="20px">
        Offers Available
      </Heading>
      <HStack w="full" align="center" justify={"space-between"}>
        <Text maxW={"65%"} color="white" fontSize={"14px"}>
          Enjoy discounts by applying these offers on your purchase
        </Text>
        <Button
          border="1px"
          borderColor={"#F23090"}
          borderRadius="full"
          bg={"#FFF4F9"}
          color="#D6096E"
          fontSize={"12px"}
          rounded="400px"
          onClick={onOpen}
        >
          View Offers
        </Button>
        <Modal size="lg" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="#141414" color="white">
            <VStack align="flex-start" px={6} py={2} maxW="70%">
              <Heading fontSize={"28px"} fontWeight="600">
                Offer Available
              </Heading>
              <Text fontSize={"14px"} fontWeight="400">
                Scan QR Code to complete payment. Use your phone wallet app to
                confirm payment.
              </Text>
            </VStack>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={10}>
                <CouponCard />
                <CouponCard />
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
    </Box>
  );
}

export default OfferCard;
