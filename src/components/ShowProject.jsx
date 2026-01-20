import React from "react";
import ChangeDate from "../util/ChangeDate";
import Tasks from "./Tasks";

/**
 * Zeigt Details eines ausgewählten Projekts und einen Delete-Button.
 *
 * @param {Object} props
 * @param {Array} props.clickedProject - Array mit Projekt-Daten und aktuellem Index.
 * @param {Function} props.deleteProject - Funktion zum Löschen des aktuellen Projekts.
 * @returns {JSX.Element}
 */
const ShowProject = ({ clickedProject, deleteProject }) => {
  const currentIndex = clickedProject[1];
  const changeDateformat = clickedProject.date;
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-4xl font bold">
          {clickedProject.at(0)?.at(0)?.title ?? "Kein Titel"}
        </h1>
        <button
          onClick={() => deleteProject(currentIndex)}
          className="text-black/60 font-bold cursor-pointer"
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-black/60">
        {ChangeDate(clickedProject.at(0)?.at(0)?.date)}
      </p>
      <p>{clickedProject.at(0)?.at(0)?.description}</p>

      <hr className="text-gray-500/40 border rounded-md" />
      <Tasks title={clickedProject.at(0)?.at(0)?.title} />
    </div>
  );
};

export default ShowProject;
