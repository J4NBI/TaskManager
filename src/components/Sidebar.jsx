import React from "react";

import { FaPlus } from "react-icons/fa";
import ShowProject from "./ShowProject";

const Sidebar = ({
  handleselectedproject,
  newproject,
  projects,
  showProjectFromIndex,
  ShowProject,
}) => {
  return (
    <div className="bg-black min-h-125 mt-8 rounded-r-md col-span-2 ">
      <div className="mt-16 mx-8 mb-8">
        <h2 className="text-white text-2xl font-bold">YOUR PROJECTS</h2>
        {newproject && !ShowProject ? (
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
            className="bg-gray-800 text-white/50 flex items-center gap-2 mt-8 px-4 py-2 rounded-md cursor-pointer hover:opacity-80 hover:text-white transition-all duration-200"
          >
            <FaPlus /> Add Project
          </button>
        )}
      </div>
      {projects &&
        projects.map((project, index) => (
          <div className="mt-2 px-8" key={index} id={index}>
            <button
              onClick={() => showProjectFromIndex(index)}
              className="text-white cursor-pointer"
            >
              {project.title}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
