import NextAuth from "next-auth";
import { createTransport } from "nodemailer";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "../../../db";

let transporter = createTransport({
  service: "Yahoo", // no need to set host or port etc.
  auth: {
    user: "pratiksaria@yahoo.com",
    pass: "Sonia@1977",
  },
});

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  events: {
    signIn: ({ user, account, profile, isNewUser }) => {
      console.log(`isNewUser: ${JSON.stringify(isNewUser)}`);
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("USER", user);
      // console.log("ACCOUNT", account);
      // console.log("PROFILE", profile);
      // console.log("EMAIL", email);
      // console.log("CRED", credentials);
      return true;
    },
  },
});
