import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  HStack,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Badge,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";

function OrderTable() {
  return (
    <Box
      px={4}
      pt={8}
      bg="#272727"
      borderRadius={"base"}
      border="1px"
      borderColor={"#1F1F1F"}
    >
      <HStack pb={4} align="center" justify={"space-between"}>
        <Heading fontWeight={500} fontSize={20}>
          Orders
        </Heading>
        <Box>
          <Box>
            <Menu>
              <MenuButton as={Button} variant="admin">
                Today
              </MenuButton>
              <MenuList>
                <MenuItem>Tommorow</MenuItem>
                <MenuItem>1 week</MenuItem>
                <MenuItem>2 week</MenuItem>
                <MenuItem>1 month</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </HStack>
      <TableContainer>
        <Table variant="simple" size={"sm"}>
          <Thead>
            <Tr>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                Image
              </Th>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                Order ID
              </Th>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                Date
              </Th>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                Product Name
              </Th>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                User Address
              </Th>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                Status
              </Th>
              <Th
                fontWeight={"400"}
                color="#888888"
                textTransform="capitalize"
                fontSize="12px"
                borderBottom={'1px solid #333333'}
                py={4}
              >
                View Details
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                <Image
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "7px" }}
                  src={"https://picsum.photos/200/300"}
                />
              </Td>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                1233123123
              </Td>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                22/11/22
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                Solar panel
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR
              </Td>
              <Td textTransform="capitalize" borderBottom={'1px solid #333333'} py={4}>
                <Badge p={2} borderRadius={"full"} colorScheme="green">
                  Accepted
                </Badge>
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="12px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                <Link>View Details</Link>
              </Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                <Image
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "7px" }}
                  src={"https://picsum.photos/200/300"}
                />
              </Td>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                1233123123
              </Td>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                22/11/22
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                Solar panel
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR
              </Td>
              <Td textTransform="capitalize" borderBottom={'1px solid #333333'} py={4}>
                <Badge p={2} borderRadius={"full"} >
                  Accepted
                </Badge>
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="12px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                <Link>View Details</Link>
              </Td>
            </Tr>
            <Tr>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                <Image
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "7px" }}
                  src={"https://picsum.photos/200/300"}
                />
              </Td>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                1233123123
              </Td>
              <Td
                fontWeight={"400"}
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                22/11/22
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                Solar panel
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="14px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                9iSD3wkC1aq3FcwgjJfEua9FkkZJWv7Cuxs6sKjc3VnR
              </Td>
              <Td textTransform="capitalize" borderBottom={'1px solid #333333'} py={4}>
                <Badge p={2} borderRadius={"full"} colorScheme="green">
                  Accepted
                </Badge>
              </Td>
              <Td
                fontWeight={"400"}
                color="white"
                textTransform="capitalize"
                fontSize="12px"
                borderBottom={'1px solid #333333'}
                py={2}
              >
                <Link>View Details</Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrderTable;
