import React from "react";

import { FaPlus } from "react-icons/fa";

const Sidebar = ({ handleselectedproject, newproject, projects }) => {
  return (
    <div className="bg-black h-[800px] mt-8 rounded-r-md col-span-2">
      <div className="mt-16 mx-8">
        <h2 className="text-white text-2xl font-bold">YOUR PROJECTS</h2>
        {newproject ? (
          <button
            disabled
            onClick={handleselectedproject}
            className="bg-gray-800 text-white/50 flex items-center gap-2 mt-8 px-4 py-2 rounded-md cursor-pointer"
          >
            <FaPlus /> Add Project
          </button>
        ) : (
          <button
            onClick={handleselectedproject}
            className="bg-gray-800 text-white/50 flex items-center gap-2 mt-8 px-4 py-2 rounded-md cursor-pointer"
          >
            <FaPlus /> Add Project
          </button>
        )}
      </div>
      {projects.map((project) => (
        <div className="mt-6 px-8" key={project.title}>
          <button className="text-white cursor-pointer">{project.title}</button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
