import React from "react";
import { useRouter } from "next/router";
import ProductDetailsPage from "../../components/Product/index";
import StoreLayout from "../../layout/StoreLayout";

function ProductPage() {
  const router = useRouter();
  return (
    <StoreLayout>
      <ProductDetailsPage />
    </StoreLayout>
  );
}

export default ProductPage;
