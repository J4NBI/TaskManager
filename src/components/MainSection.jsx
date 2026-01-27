import React from "react";
import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";
import ShowProject from "./ShowProject";
import { TaskContext } from "../store/task-context";
import { useContext } from "react";

/**
 * Hauptbereich-Komponente, die je nach State EmptyProject, NewProject oder ShowProject anzeigt.
 *
 * @param {Object} props - Die Props der Komponente.
 * @param {boolean} props.isAddProject - Gibt an, ob der "Add Project"-Modus aktiv ist.
 * @param {Function} props.handleselectedproject - Handler zum Umschalten des Modus.
 * @param {Function} props.setNewProject - Funktion zum Hinzufügen eines neuen Projekts.
 * @param {Function} props.deleteProject - Funktion zum Löschen eines Projekts.
 * @returns {JSX.Element}
 */
const MainSection = ({
  isAddProject,
  handleselectedproject,
  setNewProject,
  deleteProject,
}) => {
  const taskCtx = useContext(TaskContext);
  const clickedProject = taskCtx.clickedProject;
  if (isAddProject) {
    return (
      <div className="w-full col-span-4">
        <NewProject />
      </div>
    );
  }

  if (clickedProject) {
    return (
      <div className="w-full col-span-4">
        <ShowProject />
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
