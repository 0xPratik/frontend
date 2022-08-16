import React, { useState, useEffect } from "react";
import * as anchor from "@project-serum/anchor";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Flex,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useCart } from "../../../store/cartStore";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";

const NotConnected = () => {
  const { publicKey } = useWallet();
  const CartItems = useCart((state) => state.cart);
  const [total, setTotal] = useState<number>(0);
  const { connection } = useConnection();
  const [usdBalance, setUsdBalance] = useState<number>(0);
  const [isOk, setisOk] = useState<boolean>(false);
  const mint = new anchor.web3.PublicKey(
    "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"
  );

  useEffect(() => {
    let tempTotal = 0;
    CartItems.forEach((item) => {
      tempTotal = tempTotal + item.price;
    });
    console.log(tempTotal);
    if (tempTotal !== 0) {
      setTotal(tempTotal);
    }
  }, [total]);

  useEffect(() => {
    if (publicKey == null || publicKey == undefined) {
      return;
    }
    (async () => {
      let response = await connection.getParsedTokenAccountsByOwner(publicKey, {
        mint: mint,
      });
      console.log("TOKEN RES", response?.value[0].account.data?.parsed);
      const parsedAccount = response?.value[0].account.data?.parsed;
      console.log(parsedAccount.info.tokenAmount.uiAmountString);
      const usdVal = parsedAccount.info.tokenAmount.uiAmountString;

      setUsdBalance(usdVal);
      const isgreater = usdBalance > total;
      setisOk(isgreater);
    })();
  }, [usdBalance, publicKey]);
  return (
    <Box>{isOk ? <Box>The Balance in your wallet is not</Box> : null}</Box>
  );
};

function TotalAmount() {
  const CartItems = useCart((state) => state.cart);
  const { publicKey } = useWallet();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let tempTotal = 0;
    CartItems.forEach((item) => {
      tempTotal = tempTotal + item.price;
    });
    console.log(tempTotal);
    if (tempTotal !== 0) {
      setTotal(tempTotal);
    }
  }, [total]);
  return (
    <Box py={6} px={7} w="full" bg="#252525" borderRadius={"base"}>
      <Heading pb={8} fontSize="20px">
        Total Amount
      </Heading>
      <VStack>
        <HStack w={"full"} align="center" justify={"space-between"}>
          <Heading fontSize={"18px"}>Order Total</Heading>
          <Heading fontSize={"18px"}>USDC {total}</Heading>
        </HStack>

        <Text align="left" w="full">
          Your Wallet {publicKey?.toString()}
        </Text>
        <NotConnected />
        <Button w="full">Pay</Button>
      </VStack>
    </Box>
  );
}

export default TotalAmount;
