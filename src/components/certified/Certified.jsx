import React from "react";
import img1 from "../../assets/img/B20225-Luftgehaltspruefer-5-5l-bcf1b805-924f645a@568w.png";
import img2 from "../../assets/img/Pycnometer-Bottles.jpg";
import img3 from "../../assets/img/aggregate-impact-tester-500x500.webp";
import img4 from "../../assets/img/hot-air-oven-500x500.webp";

const Certified = () => {
  return (
    <div className="w-full lg:flex">
      <div className="w-full lg:w-6/12 bg-black flex ">
        <div className="w-6/12  bg-zinc-700">
          <div className="w-full h-3/6 bg-gray-50 relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img1}
              alt=""
              className="w-full h-full  transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-full h-3/6 bg-[#f0f0f0] flex justify-center items-center">
            <h1 className="text-2xl text-center font-semibold">
             SPECIFIC GRAVITY
            </h1>
          </div>
        </div>
        <div className="w-6/12  bg-blue-900">
          <div className="w-full h-3/6 bg-[#333333] flex justify-center items-center">
            <h1 className="text-2xl text-center font-semibold text-white">
              AIR ENTRAINMENT METER TEST
            </h1>
          </div>
          <div className="w-full h-3/6 bg-slate-600 relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img2}
              alt=""
              className="w-full h-full transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-black flex ">
        <div className="w-6/12  bg-zinc-700">
          <div className="w-full h-3/6 bg-gray-50 relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img3}
              alt=""
              className="w-full h-full  transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-full h-3/6 bg-[#f0f0f0] flex justify-center items-center">
            <h1 className="text-2xl text-center font-semibold">
              MOISTURE TEST
            </h1>
          </div>
        </div>
        <div className="w-6/12  bg-blue-900">
          <div className="w-full h-3/6 bg-[#333333] flex justify-center items-center">
            <h1 className="text-2xl text-center font-semibold text-white">
               IMPACT TEST
            </h1>
          </div>
          <div className="w-full h-3/6 bg-slate-600 relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img4}
              alt=""
              className="w-full h-full transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
