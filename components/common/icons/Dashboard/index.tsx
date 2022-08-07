import React from "react";
import { Icon } from "@chakra-ui/react";

function index(props: any) {
  return (
    <Icon
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
        fill="white"
      />
    </Icon>
  );
}

export default index;
