"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-950">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Damon",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full stack developer",
                1000,
                "Web3 developper",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-white text-lg mb-6 lg:text-xl">
            Je me présente Daywon Développeur fullstack
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-blue-400 bg-transparent hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full place-content-center p-2 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/image/ProfilP-copie.png"
              alt="hero image"
              className=" rounded-full m-3 h-[210px] place-self-center lg:w-[335px] lg:h-[335px]"
              width={210}
              height={210}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
