import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    console.log(id);
    if (id === null || id === undefined) {
      return res.status(400).send("NULL ID");
    }

    const address = await prisma.address.findUnique({
      where: {
        id: id as string,
      },
    });

    return res.status(200).json(address);
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
