/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import imageOne from "../../assets/IMG-20240210-WA0004.jpg";
import videoIcon from "../../assets/svg/icon-videoplay.svg";
import Button from "../common/Button";
import Ytmodal from "../yt-modal/Ytmodal";

const Service = () => {
  const [ytShow, setYtShow] = useState(false);
  return (
    <>
      {ytShow ? <Ytmodal ytShow={setYtShow} /> : ""}
      <div className="lg:flex relative">
        <div className="relative lg:w-6/12 w-full">
          <img
            src={imageOne}
            alt="Your Image"
            className="block w-full h-auto"
          />

          <div className="absolute inset-0 bg-black opacity-85"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="" onClick={() => setYtShow(true)}>
              <img src={videoIcon} alt="" className="mx-auto" />
              <h1 className="text-white text-2xl ml">Corporate Video</h1>
            </div>
          </div>
        </div>

        <div className="lg:w-6/12 w-full  bg-white px-10 my-auto lg:py-0 py-10">
          <h1 className="text-red-600 text-lg font-poppins font-bold">
            OUR SERVICES
          </h1>
          <h1 className="text-4xl font-bold text-[#343232] my-4">
            Serving the construction <br /> industry’s needs
          </h1>
          <p className="max-w-[600px] font-roboto">
            For over 17 years Best Readymix has led the construction industry by
            supplying high quality ready mix innovative concrete solutions. From
            domestic pool surrounds and driveways to residential, commercial and
            large infrastructure developments, Best Ready mix supports projects
            of all scales.
          </p>
          <div className="my-6">
            <Button value="Discover More" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
