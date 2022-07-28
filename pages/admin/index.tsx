import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import AdminLayout from "../../layout/AdminLayout";
import Adminpage from "../../components/Admin";

const Admin: NextPage = () => {
  return (
    <AdminLayout>
      <Adminpage />
    </AdminLayout>
  );
};

export default Admin;
