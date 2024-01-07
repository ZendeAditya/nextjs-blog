"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "../auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl,
        redirect: true,
      });
      console.log("res", res);
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 w-96 h-96 rounded-lg shadow-lg">
        <h2 className="text-center p-3 text-lg font-semibold">Login</h2>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex items-center justify-start flex-col 
          [&_div]:flex [&_div]:flex-col [&_div]:items-start [&_div]:justify-start
          [&_div>input]:border-2 [&_div>input]:py-2 [&_div>input]:w-72 [&_div>input]:rounded-md [&_div]:shadow-sm [&_div>label]:font-semibold
          [&_div>input]:outline-none [&_div>input]:ps-2
        "
        >
          <div>
            <label htmlFor="emailId">Email</label>
            <input
              type="email"
              name="email"
              id="emailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passWord">password</label>
            <input
              type="password"
              name="password"
              id="passWord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="py-2 px-12 rounded-md bg-blue-100 m-2">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center p-3">
          <p className="">{"Don't"} have an account</p>
          <p>
            <button onClick={() => signIn("credentials")}>
              <Link href="/signup" className="text-center underline ">
                signup here
              </Link>
            </button>
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 p-5">
          <div>
            <IoLogoGoogle size={30} />
          </div>
          <div>
            <FaGithub size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
