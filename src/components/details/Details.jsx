import React from "react";
import image from "../../assets/IMG-20240210-WA0004.jpg";
import DetailsTwo from "./DetailsTwo";

const Details = () => {
  return (
    <>
      <div className="bg-white w-10/12 absolute lg:-top-44 md:-top-1  h-96 top-8 lg:flex">
        <div className="lg:w-6/12 w-full">
          <div className="flex justify-center w-full lg:py-16 py-3">
            <hr className="rotate-180 w-1.5 bg-red-700 ml-2 h-36" />
            <h1 className="lg:text-3xl text-lg  mx-3 font-poppins">
              Call for Readymix Concrete at <br /> anywhere in Thrissur,
              Palakkad, <br />
              Malappuram, Calicut, Kannur & <br /> Ernakulam
            </h1>
          </div>
        </div>
        <div className="lg:w-6/12 w-full relative overflow-hidden bg-cover lg:h-auto h-72 bg-no-repeat bg-slate-700 ">
          <img
            src={image}
            alt=""
            className="w-full h-full transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <div className=" w-full flex justify-center items-end lg:pt-32 pt-96">
        <div>
          <DetailsTwo />
        </div>
      </div>
    </>
  );
};

export default Details;
