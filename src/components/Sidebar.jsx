import React from "react";

import { FaPlus } from "react-icons/fa";

const Sidebar = ({ handleselectedproject, newproject }) => {
  return (
    <div className="bg-black h-[800px] mt-8 rounded-r-md col-span-2">
      <div className="mt-16 mx-8">
        <h2 className="text-white text-2xl font-bold">YOUR PROJECTS</h2>
        {newproject ? (
          <button
            disabled
            onClick={handleselectedproject}
            className="bg-gray-800 text-white/50 flex items-center gap-2 mt-8 px-4 py-2 rounded-md"
          >
            <FaPlus /> Add Project
          </button>
        ) : (
          <button
            onClick={handleselectedproject}
            className="bg-gray-800 text-white/50 flex items-center gap-2 mt-8 px-4 py-2 rounded-md"
          >
            <FaPlus /> Add Project
          </button>
        )}
      </div>
      /* PROJECTS LIST */
    </div>
  );
};

export default Sidebar;
