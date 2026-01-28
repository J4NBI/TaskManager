import { FaPlus } from "react-icons/fa";
import { TaskContext } from "../store/task-context";
import { useContext } from "react";

/**
 * Sidebar-Komponente für die Anzeige der Projektliste.
 *
 * Zeigt alle gespeicherten Projekte an und bietet einen Button zum Hinzufügen
 * eines neuen Projekts. Der "Add Project"-Button ist deaktiviert, wenn sich
 * die App bereits im "Add Project"-Modus befindet.
 *
 * @component
 * @returns {JSX.Element} Die Sidebar mit Projektliste und Add-Button
 */
const Sidebar = () => {
  const {
    handleselectedproject,
    isAddProject,
    projects,
    showProjectFromIndex,
  } = useContext(TaskContext);

  return (
    <div className="bg-black  md:mt-8 mb-12 rounded-r-md col-span-2 pb-12">
      <div className="md:mt-16 mx-8 mb-8">
        <h2 className="text-white text-2xl font-bold">YOUR PROJECTS</h2>
        <button
          disabled={isAddProject}
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
              className="text-white cursor-pointer font-bold"
            >
              {project.title}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
