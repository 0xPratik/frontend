import { NextPage, InferGetStaticPropsType } from "next";
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

const MainStorePage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <StoreLayout>
      <StorePage products={products} />
    </StoreLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const url = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const res = await axios.get(`${url}/api/product`);
  const products = res.data;

  if (!products) {
    return {
      notFound: true,
    };
  }
  return { props: { products } };
};

export default MainStorePage;
