import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tooltip,
  Box,
  Heading,
  Text,
  HStack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";

function TokenGated() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mint, setMint] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);
  const { publicKey, wallet } = useWallet();
  useEffect(() => {
    if (publicKey !== null) {
      setActive(false);
    }
  }, [wallet, publicKey]);
  return (
    <>
      <Tooltip
        hasArrow
        label="Please connect your wallet to interact"
        isDisabled={!active}
        shouldWrapChildren
        mt="3"
        bg="red.600"
      >
        <Button onClick={onOpen} isDisabled={active}>
          NFT Gated
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} size="lg" onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#1a1a1a">
          <ModalHeader color="white">NFT Gated Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>
                This Feature allow only a certain set of user&apos;s holding a
                NFT from a particular NFT Collection to purchase this product
              </Text>
              <FormControl>
                <FormLabel>Collection NFT Mint</FormLabel>
                <Input
                  type="text"
                  placeholder="mint address"
                  value={mint}
                  onChange={(e: any) => setMint(e.target.value)}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TokenGated;
