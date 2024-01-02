"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
type Props = {
};

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
      name: "Blog",
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
      name: "Sign Up",
      href: "/signup",
    },
  ];
  return (
    <>
      <nav className="container mx-auto bg-black/20  rounded-md py-2 px-9 m-2 h-12 flex items-center justify-between">
        <div>
          <h2 className="font-semibold">{"<Blog/>"}</h2>
        </div>
        <ul className={`${open ? "hidden" : "block"} z-40 absolute right-0 bg-green-50 w-screen  h-screen top-0  flex items-center justify-evenly flex-col`}>
          {navLinks.map((link) => (
            <li className="" key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button onClick={handleOpen} className="-z-40 absolute right-0">
            {open ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
