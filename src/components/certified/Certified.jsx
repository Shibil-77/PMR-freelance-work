import React from "react";
import img1 from "../../assets/IMG-20240210-WA0004.jpg";

const Certified = () => {
  return (
    <div className="w-full lg:flex">
      <div className="w-full lg:w-6/12 bg-black flex ">
        <div className="w-6/12  bg-zinc-700">
          <div className="w-full h-3/6 bg-gray-50">
            <img src={img1} alt="" className="w-full h-full" />
          </div>
          <div className="w-full h-3/6 bg-[#f0f0f0] flex justify-center items-center">
            <h1 className="text-2xl text-center font-semibold">
              A Quality Readymix Cement Solutions for the Construction Industry
            </h1>
          </div>
        </div>
        <div className="w-6/12  bg-blue-900">
          <div className="w-full h-3/6 bg-[#333333] flex justify-center items-center">
            <h1 className="text-2xl text-center font-semibold text-white">
              A Quality Readymix Cement Solutions for the Construction Industry
            </h1>
          </div>
          <div className="w-full h-3/6 bg-slate-600">
            <img src={img1} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-red-800 h-auto lg:block hidden ">
        <img src={img1} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Certified;
