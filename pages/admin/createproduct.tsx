import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Heading } from "@chakra-ui/react";
import CreatePage from "../../components/Admin/createProduct";
function CreateProduct() {
  return (
    <AdminLayout>
      <CreatePage />
    </AdminLayout>
  );
}

export default CreateProduct;
