import { BellIcon, EmailIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, HStack, IconButton, Image, Select } from "@chakra-ui/react";
import React from 'react'
import Logo from '../../../components/common/Logo';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <HStack
      bg={"#181717"}
      justifyContent="space-between"
      px={[0, 10, 30]}
      py="2"
    >
      <Logo />
      <HStack spacing={5}>
        <IconButton
          variant="outline"
          borderColor={"#ffffff"}
          aria-label="Notifications"
          fontSize="20px"
          icon={<Image src="/assets/store/navbaricon/bell.svg" />}
        />
        <IconButton
          variant="outline"
          borderColor={"#ffffff"}
          aria-label="Notifications"
          fontSize="20px"
          icon={<Image src="/assets/store/navbaricon/like.svg" />}
        />
        <IconButton
          size={"md"}
          variant="outline"
          borderColor={"#ffffff"}
          aria-label="Notifications"
          fontSize="20px"
          icon={<Image src="/assets/store/navbaricon/cart.svg" />}
        />
        <Box>
          <Button
            variant={"outline"}
            borderColor={"#ffffff"}
            borderWidth="1px"
            size={"lg"}
            leftIcon={<Image src="/assets/store/navbaricon/wallet.svg" />}
          >
            Connect Wallet
          </Button>
        </Box>
        <Avatar
          size={"sm"}
          name="John Doe"
          src="/assets/store/navbaricon/avatar.png"
        />
        <Select variant={"unstyled"}>
          <option value="Michael Jordan">Michael Jordan</option>
          <option value="Pratik Saria">Pratik Saria</option>
          <option value="Sagar Gajare">Sagar Gajare</option>
        </Select>
      </HStack>
    </HStack>
  );
}

export default Navbar