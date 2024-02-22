import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../common/Button";

const Gallery = () => {
  return (
    <div className="bg-[#f0f0f0] py-10 pb-20">
      <div className="container flex justify-between">
        <div>
          <h1 className="text-red-600 text-lg mt-10  font-poppins font-bold">
            PHOTO GALLERY
          </h1>
          <h1 className="text-4xl font-bold  text-[#343232] my-2">Gallery</h1>
        </div>
        <div className="flex items-end">
          <Button value={"View Gallery"} />
        </div>
      </div>
      <div className="flex lg:container mx-5 lg:mx-0 gap-5">
        <div className="w-full lg:w-6/12">
          <div className="grid sm:mx-5 lg:mx-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 pt-5">
            <div className="section-1 space-y-5">
              <div className="h-[200px] md:h-[300px] w-full relative rounded-lg">
                <div class="absolute inset-0 bg-common rounded-lg"></div>
                <div className="bg-[url(https://res.cloudinary.com/dzarzvfph/image/upload/v1708594090/PMR-img/tqylxeamhymxwhwoknc3.jpg)] h-full w-full bg-cover rounded-lg">
                  <div className="absolute bottom-0 px-5 py-5 w-full flex justify-between">
                    <div>
                      {/* <h1 class="text-white font-semibold text-xl md:text-2xl">
                        Exploring Growup integration for your construction
                        company?
                      </h1>
                      <p class="text-secondary font-medium cursor-pointer">
                        Join with us.
                      </p> */}
                    </div>
                    <div className="arrow-icon text-xl text-white self-end">
                      {/* <FaArrowRightLong /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[200px] md:h-[300px] w-full relative rounded-lg">
                <div class="absolute inset-0 bg-common rounded-lg"></div>
                <div className="bg-[url(https://res.cloudinary.com/dzarzvfph/image/upload/v1708594090/PMR-img/xg64ahrrtd6xmzdeyyu0.jpg)] h-full w-full bg-cover rounded-lg">
                  <div className="absolute bottom-0 px-5 py-5 w-full flex justify-between">
                    <div>
                      {/* <h1 class="text-white font-semibold text-xl md:text-2xl">
                        Considering Growup for smoother construction projects?
                      </h1>
                      <p class="text-secondary font-medium cursor-pointer">
                        Join with us.
                      </p> */}
                    </div>
                    <div className="arrow-icon text-xl text-white self-end">
                      {/* <FaArrowRightLong /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-2">
              <div className="h-[200px] md:h-[620px] w-full bg-cover relative rounded-lg">
                <div class="absolute inset-0 bg-common rounded-lg"></div>
                <div className="bg-[url(https://res.cloudinary.com/dzarzvfph/image/upload/v1708594089/PMR-img/a80qe1pqd0uzuofigfeo.jpg)] h-full w-full bg-cover rounded-lg">
                  <div className="absolute bottom-0 px-5 py-5 w-full flex justify-between">
                    <div>
                      {/* <h1 class="text-white font-semibold text-xl md:text-2xl">
                        Growup for your construction company?
                      </h1>
                      <p class="text-secondary font-medium cursor-pointer">
                        Join with us.
                      </p> */}
                    </div>
                    <div className="arrow-icon text-xl text-white hover:text-primary self-end">
                      {/* <FaArrowRightLong /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid sm:mx-5 lg:mx-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 pt-5">
            <div className="section-1 space-y-5">
              <div className="h-[200px] md:h-[300px] w-full relative rounded-lg">
                <div class="absolute inset-0 bg-common rounded-lg"></div>
                <div className="bg-[url(https://res.cloudinary.com/dzarzvfph/image/upload/v1708594089/PMR-img/enwcosf1jyuaezjoqmnw.jpg)] h-full w-full bg-cover rounded-lg">
                  <div className="absolute bottom-0 px-5 py-5 w-full flex justify-between">
                    <div>
                      {/* <h1 class="text-white font-semibold text-xl md:text-2xl">
                        Exploring Growup integration for your construction
                        company?
                      </h1>
                      <p class="text-secondary font-medium cursor-pointer">
                        Join with us.
                      </p> */}
                    </div>
                    <div className="arrow-icon text-xl text-white self-end">
                      {/* <FaArrowRightLong /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[200px] md:h-[300px] w-full relative rounded-lg">
                <div class="absolute inset-0 bg-common rounded-lg"></div>
                <div className="bg-[url(https://res.cloudinary.com/dzarzvfph/image/upload/v1708594089/PMR-img/eo1nobyabttn78dxfoml.jpg)] h-full w-full bg-cover rounded-lg">
                  <div className="absolute bottom-0 px-5 py-5 w-full flex justify-between">
                    <div>
                      {/* <h1 class="text-white font-semibold text-xl md:text-2xl">
                        Considering Growup for smoother construction projects?
                      </h1>
                      <p class="text-secondary font-medium cursor-pointer">
                        Join with us.
                      </p> */}
                    </div>
                    <div className="arrow-icon text-xl text-white self-end">
                      {/* <FaArrowRightLong /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-2">
              <div className="h-[200px] md:h-[620px] w-full bg-cover relative rounded-lg">
                <div className="absolute inset-0 bg-common rounded-lg"></div>
                <div className="bg-[url(https://res.cloudinary.com/dzarzvfph/image/upload/v1708594089/PMR-img/a80qe1pqd0uzuofigfeo.jpg)] h-full w-full bg-cover rounded-lg ">
                  <div className="absolute bottom-0 px-5 py-5 w-full flex justify-between">
                    <div>
                      {/* <h1 class="text-white font-semibold text-xl md:text-2xl">
                        Growup for your construction company?
                      </h1>
                      <p class="text-secondary font-medium cursor-pointer">
                        Join with us.
                      </p> */}
                    </div>
                    <div className="arrow-icon text-xl text-white hover:text-primary self-end">
                      {/* <FaArrowRightLong /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
