import React from "react";
import AdminCard from "../AdminCard";
import { HStack, SimpleGrid } from "@chakra-ui/react";
import CouponIcon from "../../../common/icons/Coupon";
import LockIcon from "../../../common/icons/Card/Lock";
import SolIcon from "../../../common/icons/Card/Sol";
import WalletIcon from "../../../common/icons/Card/Wallet";

const CardContent = [
  {
    icon: <WalletIcon />,
    text: "Wallet Balance",
    heading: "0.00 SOL",
  },
  {
    icon: <SolIcon />,
    text: "Total Earnings",
    heading: "0.00 SOL",
  },
  {
    icon: <LockIcon />,
    text: "Locked Collateral",
    heading: "0.00 SOL",
  },
  {
    icon: <CouponIcon />,
    text: "Redeemed Coupons",
    heading: "0",
  },
];

function AdminCardContainer() {
  return (
    <SimpleGrid columns={4} spacing={2}>
      {CardContent.map((item) => {
        return (
          <AdminCard
            key={item.text}
            icon={item.icon}
            text={item.text}
            heading={item.heading}
          />
        );
      })}
    </SimpleGrid>
  );
}

export default AdminCardContainer;
