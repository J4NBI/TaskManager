import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import React from "react";

/**
 * Haupt-App-Komponente für das TaskManager-Projekt.
 *
 * Verwaltet den globalen State für Projekte, das aktuell ausgewählte Projekt,
 * das Hinzufügen/Löschen von Projekten sowie das Routing.
 *
 * @returns {JSX.Element}
 */
function App() {
  // State if new project is clicked
  const [isAddProject, setIsAddProject] = React.useState(false);
  // SAVED PROJECTS STATE
  const [projects, setProjects] = React.useState([]);
  // SHOW CLICKED PROJECT
  const [clickedProject, setClickedProject] = React.useState();

  /**
   * Fügt ein neues Projekt hinzu und speichert es im LocalStorage.
   * @param {Object} wert - Das neue Projekt-Objekt.
   */
  function setNewProject(wert) {
    const newProject = {
      ...wert,
      id: crypto.randomUUID(), // or Date.now().toString()
    };
    const newProjects = [...projects, newProject];
    setProjects(newProjects);
    localStorage.setItem("savedProjects", JSON.stringify(newProjects));
    handleSelectedProject();
  }

  /**
   * Handler für das Umschalten des "Neues Projekt"-Modus.
   */
  function handleSelectedProject() {
    if (isAddProject) {
      setClickedProject((_) => null);
    }
    setIsAddProject((prev) => !prev);
  }

  /**
   * Zeigt ein Projekt anhand des Index an.
   * @param {number} index - Index des anzuzeigenden Projekts.
   */
  function showProjectFromIndex(index) {
    setIsAddProject((_) => false);
    setClickedProject((_) => projects[index]);
  }

  // SHOW LOCALSTOREAGE PROJECTS
  React.useEffect(() => {
    const saved = localStorage.getItem("savedProjects");
    if (!saved || saved === undefined) {
      return;
    }

    setProjects(JSON.parse(saved));
  }, []);

  /**
   * Löscht ein Projekt anhand des Index, setzt den State zurück und navigiert zur Startseite.
   * @param {number} index - Index des zu löschenden Projekts.
   */
  function deleteProject(id) {
    setProjects((prev) => {
      const updatedProjects = prev.filter((p, i) => id !== p.id);
      localStorage.setItem("savedProjects", JSON.stringify(updatedProjects));
      return updatedProjects;
    });
    setIsAddProject(() => false);
    setClickedProject(() => null);
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="grid grid-cols-6 flex-1">
        <Sidebar
          showProjectFromIndex={showProjectFromIndex}
          handleselectedproject={handleSelectedProject}
          isAddProject={isAddProject}
          projects={projects}
          clickedProject={clickedProject}
        />
        <MainSection
          clickedProject={clickedProject}
          setNewProject={setNewProject}
          handleselectedproject={handleSelectedProject}
          isAddProject={isAddProject}
          deleteProject={deleteProject}
        />
      </div>
    </div>
  );
}

export default App;
