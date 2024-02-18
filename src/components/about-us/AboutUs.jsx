import React from "react";
import img from "../../assets/instaport-style-documentary-study-in-the-style-of-mc-escher-close-up-of-a-left-hand-and-a-right--409361361.png";

const AboutUs = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2">
      <div className="">
        <h1 className="text-4xl font-semibold">ABOUT US</h1>
        <div className="flex grid-cols-1 md:grid-cols-2">
          <div className="mt-5 md:block hidden">
            <img className="w-60 rounded-xl" src={img} alt="" />
          </div>
          <div className="m-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-2">
                <h2 className="flex items-center font-semibold text-5xl">32</h2>
                <p className="flex items-center font-semibold leading-4 text-xs">
                  Years of <br /> experience
                </p>
              </div>
              <div className="flex gap-2">
                <h2 className="flex items-center font-semibold text-5xl">
                  500
                </h2>
                <p className="flex items-center font-semibold leading-4 text-xs">
                  Project <br /> completed
                </p>
              </div>
              <div className="flex gap-2">
                <h2 className="flex items-center font-semibold text-5xl">45</h2>
                <p className="flex items-center font-semibold leading-4 text-xs">
                  Award <br /> gain
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex">
                  <h2 className="flex items-center font-semibold text-5xl">
                    100
                  </h2>
                  <p className="font-semibold text-xl">+</p>
                </div>
                <p className="flex items-center font-semibold leading-4 text-xs">
                  Architectural <br /> Gain
                </p>
              </div>
            </div>
            <div className="bg-[#F9FAF4] mt-5 p-2 rounded-md">
             <p className="">kmkmk</p>
            </div>

          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
