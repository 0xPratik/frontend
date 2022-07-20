import { rmSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error) {
    console.log("Some Error in Category", error);
    res.status(400).send(error);
  }
});
