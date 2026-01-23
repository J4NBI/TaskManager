import React from "react";
import { BsClipboard2Data } from "react-icons/bs";

/**
 * Komponente, die angezeigt wird, wenn kein Projekt ausgewählt ist.
 *
 * @param {Object} props
 * @param {Function} props.handleselectedproject - Handler zum Erstellen eines neuen Projekts.
 * @returns {JSX.Element}
 */
const EmptyProject = ({ handleselectedproject }) => (
  <div className="h-full w-full flex flex-col gap-6 items-center justify-center">
    <BsClipboard2Data size={70} />
    <h2 className="text-2xl font-bold text-black/60">No Project Selected</h2>
    <p className="text-black/60">
      Select a project or get started with a new one
    </p>
    <button
      className="bg-black text-white/50 py-2 px-4 rounded-md hover:bg-black/40 hover:text-black transition duration-150 ease-in-out cursor-pointer"
      onClick={handleselectedproject}
    >
      Create new project
    </button>
  </div>
);
export default EmptyProject;
