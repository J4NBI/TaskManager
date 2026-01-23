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
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-4xl font bold">
          {clickedProject.title ?? "Kein Titel"}
        </h1>
        <button
          onClick={() => deleteProject(clickedProject.id)}
          className="text-black/60 font-bold cursor-pointer"
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-black/60">{ChangeDate(clickedProject.date)}</p>
      <p>{clickedProject.description}</p>

      <hr className="text-gray-500/40 border rounded-md" />
      <Tasks projectId={clickedProject.id} />
    </div>
  );
};

export default ShowProject;
