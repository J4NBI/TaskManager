import React from "react";
import { FaPlus } from "react-icons/fa";
import ShowProject from "./ShowProject";

/**
 * Sidebar-Komponente zur Anzeige und Auswahl von Projekten.
 *
 * @param {Object} props
 * @param {Function} props.handleselectedproject - Handler für das Hinzufügen eines Projekts.
 * @param {boolean} props.isAddProject - Zeigt an, ob ein neues Projekt hinzugefügt wird.
 * @param {Array} props.projects - Liste der Projekte.
 * @param {Function} props.showProjectFromIndex - Handler zur Anzeige eines Projekts anhand des Index.
 * @param {Array} props.clickedProject - Aktuell ausgewähltes Projekt.
 * @returns {JSX.Element}
 */
const Sidebar = ({
  handleselectedproject,
  isAddProject,
  projects,
  showProjectFromIndex,
  clickedProject,
}) => {
  const isDisabled = isAddProject ? "disabled" : "";

  return (
    <div className="bg-black min-h-125 mt-8 rounded-r-md col-span-2 ">
      <div className="mt-16 mx-8 mb-8">
        <h2 className="text-white text-2xl font-bold">YOUR PROJECTS</h2>
        <button
          disabled={isDisabled}
          onClick={handleselectedproject}
          className="bg-gray-800 text-white/50 flex items-center gap-2 mt-8 px-4 py-2 rounded-md cursor-pointer hover:opacity-80 hover:text-white transition-all duration-200"
        >
          <FaPlus /> Add Project
        </button>
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
