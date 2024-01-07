import { NextResponse } from "next/server";
import User from "@/app/models/Users";
import authuser from "@/app/utils/authuser";
import { connectdb } from "@/app/utils/connectdb";
import bcrypt from "bcryptjs";
export const POST = async (req: Request) => {
  try {
    await connectdb();
    const { userName, email, passWord } = await req.json();
    const hashPassword = await bcrypt.hash(passWord, 10);
    try {
      const existinguser = !!(await User.findOne({ email }));
      console.log(existinguser);

      if (existinguser) {
        return NextResponse.json({
          error: "User with this email already exists.",
        });
      }
    } catch (error) {
      console.error("Error checking for existing user:", error);
      return NextResponse.json({
        error: "An error occurred while checking for existing user.",
      });
    }
    const user = await User.create({
      username: userName,
      email,
      userRoll: "user",
      password: hashPassword,
      emailVerified: new Date(),
    });

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
};
