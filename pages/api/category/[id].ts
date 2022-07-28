import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query;
      console.log(id);
      if (id === null || id === undefined) {
        return res.status(400).send("NULL ID");
      }
      const category = await prisma.category.findUnique({
        where: {
          id: id as string,
        },
        select: {
          name: true,
        },
      });
      return res.status(200).json(category);
    } catch (error) {
      console.log("Category Error", error);
      res.status(400).send(error);
    }
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query;
      console.log("PUT category", id);
      const { category } = req.body;
      if (id === null || id === undefined || category === undefined) {
        return res.status(400).send("NULL ID or Category");
      }
      const updatedCategory = await prisma.category.update({
        where: {
          id: id as string,
        },
        data: {
          name: category,
        },
      });

      return res.status(200).send(updatedCategory);
    } catch (error) {
      console.log("Category Put error", error);
      res.status(400).send(error);
    }
  })
  .delete(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query;
      console.log("DELETE category", id);
      if (id === null || id === undefined) {
        return res.status(400).send("NULL ID or Category");
      }

      const deletedCategory = await prisma.category.delete({
        where: {
          id: id as string,
        },
      });

      return res.status(200).send(deletedCategory);
    } catch (error) {
      console.log(error);
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
