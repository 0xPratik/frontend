import { NextPage } from "next";
import React from "react";
import StorePage from "../../components/store/";
import StoreLayout from "../../layout/StoreLayout";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";
import { Product } from "@prisma/client";
import { server } from "../../config/index";

interface IParams extends ParsedUrlQuery {
  id: string;
}

type MainPageProps = {
  products: Product[];
};

const MainStorePage = ({ products }: MainPageProps) => {
  return (
    <StoreLayout>
      <StorePage products={products} />
    </StoreLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get(`${server}/api/product`);
  console.log(res);
  const products = res.data;

  if (!products) {
    return {
      notFound: true,
    };
  }
  return { props: { products } };
};

export default MainStorePage;
