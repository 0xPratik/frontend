import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { Product } from "@prisma/client";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  // Gets a Single Product
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query;
      console.log(id);
      if (id === null || id === undefined) {
        return res.status(400).send("NULL ID");
      }
      const product = await prisma.product.findUnique({
        where: {
          id: parseInt(id as string),
        },
        select: {
          image: true,
          price: true,
          title: true,
          desc: true,
        },
      });
      res.status(200).json(product);
    } catch (error) {
      console.log("Product Error", error);
      res.status(400).send(error);
    }
  })
  // Updates the Data of a Product
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { title, desc, image, price } = req.body;
      const { id } = req.query;
      const product = await prisma.product.update({
        where: {
          id: parseInt(id as string),
        },
        data: {
          title: title,
          desc: desc,
          image: image,
          price: price,
        },
      });

      res.status(200).send(product);
    } catch (error) {
      console.log("Update product error", error);
      res.status(400).send(error);
    }
  });

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
