import React from "react";
import img from "../../assets/instaport-style-documentary-study-in-the-style-of-mc-escher-close-up-of-a-left-hand-and-a-right--409361361.png";
import img2 from '../../assets/img25.avif'
const AboutUs = () => {
  return (
    <div className="grid w-full  grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
      <div className="">
        <h1 className="text-4xl font-semibold">ABOUT US</h1>
        <div className="flex grid-cols-1 md:grid-cols-2 gap-10">
          <div className="mt-5 w-1/2  hidden md:flex md:justify-center relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img className="w-full h-96 rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" src={img} alt="" />
          </div>
          <div className=" my-5 md:w-1/2">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <div className="flex gap-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <h2 className="flex items-center font-semibold text-5xl max-w-xs transition duration-300 ease-in-out hover:scale-110">32</h2>
                <p className="flex items-center font-semibold leading-4 text-xs">
                  Years of <br /> experience
                </p>
              </div>
              <div className="flex gap-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <h2 className="flex items-center font-semibold text-5xl  max-w-xs transition duration-300 ease-in-out hover:scale-110">
                  500
                </h2>
                <p className="flex items-center font-semibold leading-4 text-xs">
                  Project <br /> completed
                </p>
              </div>
              <div className="flex gap-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <h2 className="flex items-center font-semibold text-5xl max-w-xs transition duration-300 ease-in-out hover:scale-110">45</h2>
                <p className="flex items-center font-semibold leading-4 text-xs ">
                  Award <br /> gain
                </p>
              </div>
              <div className="flex gap-2 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <div className="flex max-w-xs transition duration-300 ease-in-out hover:scale-110">
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
            <div className="bg-[#F9FAF4] mt-5 md:mt-10 p-2 rounded-md relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
             <p className="max-w-xs  transition duration-300 ease-in-out hover:scale-105">We, a division of the leading business company - the Best Group, Thrissur, are committed to providing high-quality ready-mix concrete solutions to the diverse needs of the construction industry. We produce and supply ready mixed concrete to customers through a network of fixed</p>
            </div>

          </div>
        </div>
      </div>
      <div className="md:my-14 relative  overflow-hidden bg-cover bg-no-repeat">
        <img className="h-96 rounded-xl  transition duration-300 ease-in-out hover:scale-110" src={img2} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
