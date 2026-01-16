import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-black text-white/50 py-2 px-4 rounded-md hover:bg-black/40 hover:text-black transition duration-150 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
