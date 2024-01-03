"use client";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import style from "./Nav.module.css";
type Props = {};

const Nav = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blogs",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "SignUp",
      href: "/signup",
    },
  ];
  return (
    <>
      <nav className="container mx-auto bg-black/20  rounded-md py-2 px-10  m-2 h-12 flex items-center justify-between ">
        <div className="flex items-center justify-start gap-3">
          <h2 className="font-semibold">{"<DevHub/>"}</h2>
          <CiSearch size={25} />
        </div>
        {/* sm screen */}
        <ul
          className={`${
            !open ? "translate-x-72" : "translate-x-0 duration-300 ease-in"
          } absolute right-0 bg-gradient-to-tr from-blue-300 to-blue-100 w-72  h-screen top-0  flex items-center justify-center gap-8 font-semibold flex-col lg:hidden
          `}
        >
          {navLinks.map((link) => (
            <li
              className={`${style.underlineHoverEffect} uppercase`}
              key={link.name}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {/* md & lg screen  */}
        <ul className={`hidden lg:flex items-center justify-between gap-4`}>
          {navLinks.map((link) => (
            <li
              className={`${style.underlineHoverEffect} uppercase`}
              key={link.name}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden z-50 duration-500 ease-in">
          <button onClick={handleOpen} className="">
            {open ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
