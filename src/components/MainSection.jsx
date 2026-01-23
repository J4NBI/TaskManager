import React from "react";
import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";
import ShowProject from "./ShowProject";

/**
 * Hauptbereich zur Anzeige, Erstellung oder Auswahl von Projekten.
 *
 * @param {Object} props
 * @param {boolean} props.isAddProject - Zeigt an, ob ein neues Projekt erstellt wird.
 * @param {Function} props.handleselectedproject - Handler für Projektauswahl oder Abbruch.
 * @param {Function} props.setNewProject - Funktion zum Hinzufügen eines neuen Projekts.
 * @param {Array} props.clickedProject - Aktuell ausgewähltes Projekt.
 * @param {Function} props.deleteProject - Funktion zum Löschen eines Projekts.
 * @returns {JSX.Element}
 */
const MainSection = ({
  isAddProject,
  handleselectedproject,
  setNewProject,
  clickedProject,
  deleteProject,
}) => {
  if (isAddProject) {
    return (
      <div className="w-full col-span-4">
        <NewProject
          setNewProject={setNewProject}
          handleselectedproject={handleselectedproject}
        />
      </div>
    );
  }

  if (clickedProject) {
    return (
      <div className="w-full col-span-4">
        <ShowProject
          clickedProject={clickedProject}
          deleteProject={deleteProject}
        />
      </div>
    );
  }

  return (
    <div className="w-full col-span-4">
      <EmptyProject handleselectedproject={handleselectedproject} />
    </div>
  );
};

export default MainSection;
