import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "@auth/core/providers/credentials";
import email from "next-auth/providers/email";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
const handler: NextAuthConfig = {
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {},
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default handler;
