// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  // Gets all the Products
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const products = await prisma.product.findMany({
        select: {
          category: {
            select: {
              name: true,
            },
          },
          desc: true,
          image: true,
          price: true,
          title: true,
          id: true,
        },
      });
      res.status(200).json(products);
    } catch (error) {
      console.log("Product Error", error);
      res.status(500).json({ error: error });
    }
  })
  // Creates a new Product
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { title, desc, price, image, category, mint } = req.body;
      if (
        title === undefined ||
        desc === undefined ||
        price === undefined ||
        image === undefined
      ) {
        return res.status(400).send("Missing Fields");
      }
      const product = await prisma.product.create({
        data: {
          desc: desc,
          image: image,
          price: price,
          title: title,
          category: {
            connectOrCreate: category,
          },
          isGated: {
            connectOrCreate: {
              where: {
                mint: mint,
              },
              create: {
                mint: mint,
                amount: 1,
              },
            },
          },
        },
      });

      return res.status(200).send(product);
    } catch (error) {
      console.log("Product Error", error);
      return res.status(400).send(error);
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
