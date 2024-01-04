import { NextResponse } from "next/server";
import User from "@/app/models/Users";
import authuser from "@/app/utils/authuser";
export const POST = async (req: Request) => {
  try {
    const { userName, email, passWord, confirmPassWord } = await req.json();
    console.log(userName, email, passWord, confirmPassWord);
    const userdata = await authuser();
    console.log("userdata", userdata);
    return NextResponse.json({ userName, email, passWord, confirmPassWord });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
};
