/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from "../common/Button";
import Img from "../../assets/hm-features-bg.jpg";

const Features = () => {
  return (
    <div className="lg:flex my-16">
      <div className="relative lg:w-6/12 w-full">
        <img src={Img} alt="Your Image" className="block w-full h-auto" />

        {/* <div className="absolute inset-0 bg-red-700 opacity-85"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="" onClick={() => setYtShow(true)}>
            <img src={videoIcon} alt="" className="mx-auto" />
            <h1 className="text-white text-2xl ml">Corporate Video</h1>
          </div>
        </div> */}
      </div>

      <div className="lg:w-6/12 w-full  bg-white px-10 my-auto lg:py-0 py-10">
        <h1 className="text-red-600 text-lg font-poppins font-bold">
          FEATURES
        </h1>
        <h1 className="text-4xl font-bold text-[#343232] my-2">
          Features of Best Readymix
        </h1>
        <p className="max-w-[600px] font-roboto my-11">
          <span className="">
            Building efficiency and speed is critical to modern civil and
            residential construction. As the population grows, so too does the
            need for new infrastructure, including roads, bridges, and buildings
            to house private properties, businesses, and essential services. The
            need for fast construction and profitability cannot compromise the
            quality or safety of a build.
          </span>
          <br />
          <br />
          <span className="">
            we understand the importance of time. We provide a wide range of
            premium concrete products and work with you to discover the best
            solution for your project, giving you the time you deserve and
            ensuring your project runs smoothly.
          </span>
        </p>
        <div className="my-6">
          <Button value="View Features " />
        </div>
      </div>
    </div>
  );
};

export default Features;
