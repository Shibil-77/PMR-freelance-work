/* eslint-disable array-callback-return */
import React from "react";
import img1 from "../../assets/svg/years.svg";
import img2 from '../../assets/svg/projects.svg'
import img3 from '../../assets/svg/team.svg'
import img4 from '../../assets/svg/customers.svg'

const DetailsTwo = () => {
  const arr = [
    { img: img1, value: 17, text: "Years of Operation" },
    { img: img2, value: 500, text: "Completed Projects" },
    { img: img3, value: 100, text: "Team Members" },
    { img: img4, value: 1700, text: "Happy Customers" },
  ];
  return (
    <div>
      <div className=" mx-auto mt-24 mb-16">
        <div className=" mx-auto flex justify-center md:my-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:gap-32 gap-5 ">
            {arr.map((value) => {
              return (
                <div className="w-full max-w-md  px-10 pt-2 pb-2 " key={value}>
                  <div className="flex flex-col items-center pt-10 ">
                    <div
                      id="svg-container"
                      className="w-24 h-24  flex justify-center items-center rounded-3xl hover:bg-secondary my-5"
                    >
                      <img
                        className="w-20 h-20  "
                        src={value.img}
                        alt="🙏 img"
                      />
                    </div>

                    <h5 className="text-xl font-medium text-center">
                      <span className="text-white font-semibold text-[28px]">
                        {value.value}
                      </span>
                    </h5>
                    {/* <br /> */}
                    <span className="text-white text-center mt-4 text-xl">{value.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTwo;
