import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import prisma from "../../../db";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const address = await prisma.address.findMany({
        select: {
          city: true,
          country: true,
          phone_no: true,
          postal_code: true,
          suite: true,
        },
      });

      return res.status(200).json(address);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { city, country, phone_no, postal_code, suite, email, pubKey } =
        req.body;

      if (
        city === undefined ||
        country === undefined ||
        phone_no === undefined ||
        postal_code === undefined ||
        suite === undefined ||
        email === undefined ||
        pubKey === undefined
      ) {
        return res
          .status(400)
          .send("City, Country, Phone No, Postal Code, Suite is undefined");
      }

      const createdAddress = await prisma.address.create({
        data: {
          city: city,
          country: country,
          phone_no: phone_no,
          postal_code: postal_code,
          suite: suite,
          user: {
            connect: {
              pubkey: pubKey,
            },
          },
        },
      });

      return res.status(200).send(createdAddress);
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
