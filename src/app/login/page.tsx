import Link from "next/link";
import React from "react";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 w-96 h-96 rounded-lg shadow-lg">
        <h2 className="text-center p-3 text-lg font-semibold">Login</h2>
        <form
          action=""
          className="flex items-center justify-start flex-col 
          [&_div]:flex [&_div]:flex-col [&_div]:items-start [&_div]:justify-start
          [&_div>input]:border-2 [&_div>input]:py-2 [&_div>input]:w-72 [&_div>input]:rounded-md [&_div]:shadow-sm [&_div>label]:font-semibold
          [&_div>input]:outline-none [&_div>input]:ps-2
        "
        >
          <div>
            <label htmlFor="emailId">Email</label>
            <input type="email" name="email" id="emailId" />
          </div>
          <div>
            <label htmlFor="passWord">password</label>
            <input type="password" name="password" id="passWord" />
          </div>
          <div>
            <button className="py-2 px-12 rounded-md bg-blue-100 m-2">
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
