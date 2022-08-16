import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { email } = req.body;

      if (email === null || email === undefined) {
        return res.status(400).send("No Email Sent");
      }

      console.log("EMAIL FROM SERVER", email);
      const createdEmail = await prisma.emailList.create({
        data: {
          email: email,
        },
      });
      console.log(createdEmail);
      return res.status(200).send(createdEmail);
    } catch (error) {
      console.log("SOmE ERRROR", error);
      return res.status(400).send(error);
    }
  })
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const emailList = await prisma.emailList.findMany({
        select: {
          email: true,
        },
      });

      return res.status(200).send(emailList);
    } catch (error) {
      console.log("EMAIL ERRROR", error);
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
