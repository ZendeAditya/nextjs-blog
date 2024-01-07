import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "@auth/core/providers/credentials";
import email from "next-auth/providers/email";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import { connectdb } from "@/app/utils/connectdb";
import User from "@/app/models/Users";
import bcrypt from "bcryptjs";
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
      async authorize(credentials, req) {
        try {
          const email = credentials?.email;
          const password = credentials?.password;
          await connectdb();
          const user = await User.findOne({ email });
          if (user) {
            const isPasswordValid = await  bcrypt.compare(
              password,
              user.password
            );

            if (isPasswordValid) {
              return user;
            }
          }
          return null;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user);
      console.log(account);
      console.log(profile);
      console.log(email);
      console.log(credentials);
      return true;
    },
  },
};

export default handler;
