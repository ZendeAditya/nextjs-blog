"use client";

import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-300 to-blue-100">
        <div>
          <h1 className="text-4xl lg:text-8xl md:text-6xl text-center p-2 font-semibold">
            Welcome To <br /> <span className="text-blue-400">DevHub</span>
          </h1>
          <p className="text-center text-md p-4  lg:text-lg italic md:text-lg">
            Explore, Share, Write: Embark on Your Coding Journey with CodeHub
          </p>
          <div className="text-center">
            <button className="py-3 px-10 rounded-md bg-blue-400 text-white hover:bg-blue-500 hover:shadow-lg">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
