import React from "react";
import { useRouter } from "next/router";
import ProductDetailsPage from "../../components/Product/index";
import StoreLayout from "../../layout/StoreLayout";
import axios from "axios";
import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Product } from "@prisma/client";
import prisma from "../../db/index";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface ProductPageprops {
  product: Product;
}

const ProductPage = ({ product }: ProductPageprops) => {
  return (
    <StoreLayout>
      <ProductDetailsPage product={product} />
    </StoreLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/api/product");
  // console.log("RESPONSE FROM getStaticPaths", res);
  const products: Product[] = res.data;
  console.log("STATIC PATH PRPDUCT", products);

  const paths = products.map((p) => {
    console.log("CHECK THIS P", p.id);
    return {
      params: {
        id: `${p.id}`,
      },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let product = undefined;
  if (context.params !== undefined) {
    const id = context.params as IParams;
    console.log("THE ID IN getStaticProps is", id);
    const res = await axios.get(`http://localhost:3000/api/product/${id.id}`);
    console.log("RESPONSE", res);
    product = res.data;
  }

  console.log("STATIC PROPS PRODUCT", product);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return { props: { product } };
};

export default ProductPage;
