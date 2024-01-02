"use client";

import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen">
        <div>
          <h1 className="text-4xl lg:text-8xl text-center p-2 font-semibold">
            Welcome To <br /> <span className="text-blue-400">DevHub</span>
          </h1>
          <p className="text-center text-sm p-4  lg:text-lg">
            Explore, Share, Write: Embark on Your Coding Journey with CodeHub
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
