import {
  Box,
  Flex,
  Text,
  HStack,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "../../../common/Logo";
import DillIcon from "../../Icons/Dill";
import BellIcon from "../../Icons/Bell";
import CartIcon from "../../Icons/Cart";
import WalletIcon from "../../Icons/Wallet";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function WithSubnavigation() {
  const { wallets, select, connected, publicKey } = useWallet();
  const { data: session } = useSession();
  console.log(session);
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
        <Logo />
        <Box>
          <HStack spacing={"32px"}>
            <Circle size="40px" border="1px" borderColor={"white"}>
              <BellIcon />
            </Circle>
            <Circle size="40px" border="1px" borderColor={"white"}>
              <DillIcon />
            </Circle>
            <Circle size="40px" border="1px" borderColor={"white"}>
              <CartIcon />
            </Circle>
            <Menu>
              <MenuButton
                color="white"
                bg="#181717"
                border="1px"
                _hover={{ bg: "#C12020" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                borderColor={"white"}
                px={"20.5px"}
                py={"20.5px"}
                as={Button}
                leftIcon={<WalletIcon width="20px" />}
              >
                Connect Wallet
              </MenuButton>
              <MenuList color="blackAlpha.800">
                {wallets.map((wallet: Wallet, index) => {
                  return (
                    <MenuItem
                      onClick={() => {
                        select(wallet.adapter.name);
                      }}
                      key={index}
                    >
                      <Flex>
                        <Image
                          width="24px"
                          height="24px"
                          src={wallet.adapter.icon}
                          alt={`${wallet.adapter.name} Icon`}
                        />
                        <Text ml={2}>{wallet.adapter.name}</Text>
                      </Flex>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <WalletMultiButton />
            <Button colorScheme={"red"} onClick={() => signIn()}>
              Sign in
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
