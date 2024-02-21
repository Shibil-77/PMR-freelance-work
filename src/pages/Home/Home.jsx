import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/about-us/AboutUs";
import Service from "../../components/Service/Service";
import Details from "../../components/details/Details";
import Features from "../../components/features/Features";
import Certified from "../../components/certified/Certified";
import Clients from '../../components/clients/Clients'
import Footers from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="md:container m-5">
        <AboutUs />
      </div>
      <Service />
      <div className=" bg-[#333333] w-full relative ">
        <div className="flex justify-center">
          <Details />
        </div>
      </div>
      <Features />
      <Certified />
      <Clients />
      <Footers />
    </>
  );
};

export default Home;
