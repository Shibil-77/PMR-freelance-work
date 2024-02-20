import React from "react";

const Button = ({value}) => {
  return (
    <button class="bg-transparent rounded-3xl hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-6 border border-red-500 hover:border-transparent ">
     {value}
    </button>
  );
};

export default Button;
