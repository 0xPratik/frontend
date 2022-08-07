import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  Image,
  MenuList,
  MenuItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";
import WalletIcon from "../../../common/icons/Wallet";

function ConnectWallet() {
  const { wallets, select, connected, publicKey, wallet } = useWallet();
  return (
    <Menu>
      <MenuButton
        color="white"
        bg="#181717"
        border="1px"
        _hover={{ bg: "brand.100" }}
        _expanded={{ bg: "brand.500" }}
        _focus={{ boxShadow: "outline" }}
        borderColor={"white"}
        px={"20.5px"}
        py={"20.5px"}
        as={Button}
        leftIcon={
          connected && wallet !== null ? (
            <Image
              width="24px"
              height="24px"
              src={wallet.adapter.icon}
              alt={`${wallet.adapter.name} Icon`}
            />
          ) : (
            <WalletIcon width="20px" />
          )
        }
      >
        {!connected && "Connect Wallet"}
        {connected &&
          wallet !== null &&
          `${publicKey?.toString().slice(0, 7)}...${publicKey
            ?.toString()
            .slice(-3)}`}
      </MenuButton>
      <MenuList color="white" bg="#141414" borderColor="#141414">
        {wallets.map((wallet: Wallet, index) => {
          return (
            <MenuItem
              key={index}
              _active={{
                bg: "#181717",
              }}
              _hover={{
                bg: "#181717",
              }}
              _focus={{
                bg: "#181717",
              }}
              onClick={async () => {
                select(wallet.adapter.name);
                await wallet.adapter.connect();
              }}
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
  );
}

export default ConnectWallet;
