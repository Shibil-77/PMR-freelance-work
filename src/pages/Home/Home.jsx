import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/about-us/AboutUs";
import Service from "../../components/Service/Service";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="md:container m-5">
        <AboutUs />
      </div>
      <Service />
    </>
  );
};

export default Home;
