import { BsClipboard2Data } from "react-icons/bs";
import { TaskContext } from "../store/task-context";
import { useContext } from "react";

/**
 * Komponente für den leeren Zustand der Anwendung.
 *
 * Wird angezeigt, wenn kein Projekt ausgewählt ist und
 * der Add-Project-Modus nicht aktiv ist. Bietet eine Call-to-Action
 * für die Erstellung eines neuen Projekts.
 *
 * @component
 * @returns {JSX.Element} Die leere Zustandsansicht mit Icon und Create-Button
 */
const EmptyProject = () => {
  const { handleselectedproject } = useContext(TaskContext);

  return (
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
};

export default EmptyProject;
