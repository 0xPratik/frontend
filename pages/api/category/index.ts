import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const categories = await prisma.category.findMany({
        select: {
          name: true,
          id: true,
        },
      });

      if (!categories) {
        return res.status(400).send("No Categories Found");
      }

      res.status(200).json(categories);
    } catch (error) {
      console.log("Some Error in Category", error);
      res.status(400).send(error);
    }
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { category } = req.body;
      if (category === undefined) {
        return res.status(400).send("Category is undefined");
      }
      const CreatedCategory = await prisma.category.create({
        data: {
          name: category,
        },
      });

      return res.status(200).send(CreatedCategory);
    } catch (error) {
      console.log(error);
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
