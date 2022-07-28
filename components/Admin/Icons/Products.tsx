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
        d="M16 6.5V8.5H18L20 20.5H0L2 8.5H4V6.5C4 4.9087 4.63214 3.38258 5.75736 2.25736C6.88258 1.13214 8.4087 0.5 10 0.5C11.5913 0.5 13.1174 1.13214 14.2426 2.25736C15.3679 3.38258 16 4.9087 16 6.5ZM14 6.5C14 5.43913 13.5786 4.42172 12.8284 3.67157C12.0783 2.92143 11.0609 2.5 10 2.5C8.93913 2.5 7.92172 2.92143 7.17157 3.67157C6.42143 4.42172 6 5.43913 6 6.5V8.5H14V6.5ZM4 10.5V12.5H6V10.5H4ZM14 10.5V12.5H16V10.5H14Z"
        fill="#ffffff"
      />
    </Icon>
  );
}

export default index;
