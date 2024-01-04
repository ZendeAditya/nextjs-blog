"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { BiError } from "react-icons/bi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { signIn } from "next-auth/react";
type Props = {};

const SignUpPage = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (passWord !== confirmPassWord) {
      setError("Password is not matching");
      return;
    }
    if (passWord.length < 8) {
      setError("password should be 8 character long");
      return;
    }
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ userName, email, passWord, confirmPassWord }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      return NextResponse.json("something went wrong");
    } else {
      setSuccess("Sign Up successfully!");
      router.push("/login");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="border-2 w-96 h-[35rem] rounded-lg shadow-lg">
        <h2 className="text-center p-3 text-lg font-semibold">Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-start flex-col 
          [&_div]:flex [&_div]:flex-col [&_div]:items-start [&_div]:justify-start
          [&_div>input]:border-2 [&_div>input]:py-2 [&_div>input]:w-72 [&_div>input]:rounded-md [&_div]:shadow-sm [&_div>label]:font-semibold
          [&_div>input]:outline-none [&_div>input]:ps-2
        "
        >
          <div>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="username"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="emailId">Email</label>
            <input
              type="email"
              name="email"
              id="emailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="passWord">password</label>
            <input
              type="password"
              name="password"
              id="passWord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPass">confirm Password</label>
            <input
              type="password"
              name="password"
              id="confirmPass"
              value={confirmPassWord}
              onChange={(e) => setConfirmPassWord(e.target.value)}
              required
            />
          </div>
          <div>
            {error && (
              <>
                <p className="py-2 px-8 rounded-md border-2 border-red-500 bg-red-400 m-2 flex items-center justify-start gap-2">
                  <BiError size={25} />
                  {error}
                </p>
              </>
            )}
            {success && (
              <>
                <p className="py-2 px-8 rounded-md border-2 border-green-500 bg-green-400 m-2 flex items-center justify-start gap-2">
                  <IoCheckmarkDoneCircle size={25} />
                  {success}
                </p>
              </>
            )}
          </div>
          <div>
            <button className="py-2 px-12 rounded-md bg-blue-100 m-2 focus:ring-2">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center p-3">
          <p className="">Already have an account</p>
          <p>
            <Link href="/login" className="text-center underline ">
              Login here
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 p-5">
          <div>
            <button onClick={async () => signIn("google")}>
              <IoLogoGoogle size={30} className="cursor-pointer" />
            </button>
          </div>
          <div>
            <button onClick={() => signIn("github")}>
              <FaGithub size={30} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
