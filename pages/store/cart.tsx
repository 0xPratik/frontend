import React, { Children } from "react";
import StoreLayout from "../../layout/StoreLayout";
import Cart from "../../components/Cart";

function CartPage() {
  return (
    <StoreLayout>
      <Cart />
    </StoreLayout>
  );
}

export default CartPage;
