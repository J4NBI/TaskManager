import React from "react";

/**
 * Button-Komponente mit individuellem Text und Klick-Handler.
 *
 * @param {Object} props
 * @param {string} props.text - Der anzuzeigende Button-Text.
 * @param {Function} [props.onclick] - Funktion, die beim Klicken ausgeführt wird.
 * @returns {JSX.Element}
 */
const Button = ({ text, onclick }) => {
  return (
    <button
      className="bg-black text-white/50 py-2 px-4 rounded-md hover:bg-black/40 hover:text-black transition duration-150 ease-in-out"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
