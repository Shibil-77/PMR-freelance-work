import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/double-expos…er-design-made-with-generative-ai_245726-4663.avif";
import img3 from "../../assets/building-construction-enginer-building-industry-concept_257123-15334.avif";
import img4 from "../../assets/future-building-construction-engineering-project-devotion-with-double-exposure-graphic-design_327072-13996.avif";

const Hero = () => {
  const [images, setImages] = useState([img3, img1, img4]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line for autoplay
    autoplaySpeed: 1000,
    fade: true,
  };
  return (
    <div className="overflow-hidden mb-10 m-3 rounded-sm">

    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative border-none">
          <img
            src={image}
            alt={`Slider ${index + 1}`}
            className="h-[80vh] object-full w-full border-none"
          />
          <div className="absolute bottom-10 m-5 md:m-20 text-left text-white">
            <h1 className="md:text-5xl text-xl font-bold items-start ">
            Concreting Relationships With <br /> Quality & Trust.
            </h1>
             
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Hero;
