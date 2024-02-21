import React from "react";

const Certified = () => {
  return (
    <div className="w-full lg:flex h-96">
      <div className="w-full lg:w-6/12 bg-black flex h-96">
        <div className="w-6/12  bg-zinc-700">
          <div className="w-full h-3/6 bg-gray-50"></div>
          <div className="w-full h-3/6 bg-orange-700"></div>
        </div>
        <div className="w-6/12  bg-blue-900">
          <div className="w-full h-3/6 bg-red-950"></div>
          <div className="w-full h-3/6 bg-slate-600"></div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-red-800 h-96 "></div>
    </div>
  );
};

export default Certified;
