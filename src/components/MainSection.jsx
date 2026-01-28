import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";
import ShowProject from "./ShowProject";
import { TaskContext } from "../store/task-context";
import { useContext } from "react";

/**
 * Hauptbereich-Komponente mit bedingtem Rendering.
 *
 * Zeigt je nach State unterschiedliche Komponenten an:
 * - NewProject: Wenn ein neues Projekt erstellt wird (isAddProject === true)
 * - ShowProject: Wenn ein Projekt ausgewählt wurde (clickedProject existiert)
 * - EmptyProject: Standard-Zustand, wenn nichts ausgewählt ist
 *
 * @component
 * @returns {JSX.Element} Die entsprechende Komponente je nach State
 */
const MainSection = () => {
  const { isAddProject, clickedProject } = useContext(TaskContext);
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
      <EmptyProject />
    </div>
  );
};

export default MainSection;
