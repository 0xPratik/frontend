import {
  Box,
  Flex,
  HStack,
  Circle,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import Logo from "../../../common/Logo";
import DillIcon from "../../Icons/Dill";
import BellIcon from "../../Icons/Bell";
import CartIcon from "../../Icons/Cart";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";
import { useSession, signIn, signOut } from "next-auth/react";
import ConnectWallet from "../ConnecWallet";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useCart } from "../../../../store/cartStore";
import { useState, useEffect } from "react";

export default function WithSubnavigation() {
  const { wallets, select, connected, publicKey, wallet } = useWallet();
  const [cartLength, setCartLength] = useState<number>(0);
  const CartItems = useCart((state) => state.cart);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setCartLength(CartItems.length);
  }, [cartLength, CartItems]);

  return (
    <Box>
      <Flex
        bg={"#181717"}
        borderBottom="1px"
        borderColor={"#515151"}
        color={"white"}
        minH={"74px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        justify={"space-between"}
      >
        <LinkBox>
          <NextLink href="/store" passHref>
            <LinkOverlay>
              <Logo />
            </LinkOverlay>
          </NextLink>
        </LinkBox>
        <Box>
          <HStack spacing={"32px"}>
            <Circle
              size="40px"
              border="1px"
              borderColor={"white"}
              _hover={{
                bg: "#313131 ",
                cursor: "pointer",
              }}
            >
              <BellIcon />
            </Circle>
            <Circle
              size="40px"
              border="1px"
              borderColor={"white"}
              _hover={{
                bg: "#313131 ",
                cursor: "pointer",
              }}
            >
              <DillIcon />
            </Circle>
            <Circle
              position={"relative"}
              size="40px"
              border="1px"
              onClick={() => router.push("/store/cart")}
              borderColor={"white"}
              _hover={{
                bg: "#313131 ",
                cursor: "pointer",
              }}
            >
              <CartIcon />
              <Circle
                position={"absolute"}
                right={0}
                top={0}
                transform="translate(8px,-7px)"
                size={5}
                bg="#FFDEEE"
                color="#D6096E"
              >
                {cartLength}
              </Circle>
            </Circle>
            <ConnectWallet />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
