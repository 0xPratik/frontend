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
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";

function AddReward() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          Add NFT as Reward
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This is the Body of the Modal</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddReward;
