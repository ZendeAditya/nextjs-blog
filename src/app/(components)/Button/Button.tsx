"use client";
import { logout } from "@/app/utils/logout";
import React from "react";

type Props = {
  text: String;
  onclickfun: () => void;
};

const Button = (props: Props) => {
  const onclick = () => {
    logout();
  };
  return (
    <div>
      <button className="py-2 px-8 border-2 m-2" onClick={onclick}>
        SignOut
      </button>
    </div>
  );
};

export default Button;
