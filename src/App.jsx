import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

/**
 * Haupt-App-Komponente für das TaskManager-Projekt.
 *
 * Verwaltet den globalen State für Projekte, das aktuell ausgewählte Projekt,
 * das Hinzufügen/Löschen von Projekten sowie das Routing.
 *
 * @returns {JSX.Element}
 */
function App() {
  // Navigation hook
  const navigate = useNavigate();

  // State if new project is clicked
  const [isAddProject, setIsAddProject] = React.useState(false);
  // SAVED PROJECTS STATE
  const [projects, setProjects] = React.useState([]);
  // SHOW CLICKED PROJECT
  const [clickedProject, setClickedProject] = React.useState([]);

  /**
   * Fügt ein neues Projekt hinzu und speichert es im LocalStorage.
   * @param {Object} wert - Das neue Projekt-Objekt.
   */
  function setNewProject(wert) {
    const newProjects = [...projects, wert];
    setProjects(() => newProjects);
    localStorage.setItem("savedProjects", JSON.stringify(newProjects));
  }

  /**
   * Handler für das Umschalten des "Neues Projekt"-Modus.
   */
  function handleSelectedProject() {
    setIsAddProject((prev) => !prev);
  }

  /**
   * Zeigt ein Projekt anhand des Index an.
   * @param {number} index - Index des anzuzeigenden Projekts.
   */
  function showProjectFromIndex(index) {
    setIsAddProject(false);
    const showIndexProject = projects.filter((p, i) => index === i);
    setClickedProject((prev) => [showIndexProject, index]);
  }

  // SHOW LOCALSTOREAGE PROJECTS
  React.useEffect(() => {
    const saved = localStorage.getItem("savedProjects");
    if (!saved || saved === undefined) {
      return;
    } else {
      setProjects(JSON.parse(saved));
    }
  }, []);

  // Save Local on project change
  React.useEffect(() => {
    localStorage.setItem("savedProjects", JSON.stringify(projects));
  }, [projects]);

  /**
   * Löscht ein Projekt anhand des Index, setzt den State zurück und navigiert zur Startseite.
   * @param {number} index - Index des zu löschenden Projekts.
   */
  function deleteProject(index) {
    setProjects((prev) => prev.filter((p, i) => i !== index));
    setIsAddProject(false);
    setClickedProject([]);
    navigate("/");
  }

  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="grid grid-cols-6">
        <Sidebar
          showProjectFromIndex={showProjectFromIndex}
          handleselectedproject={handleSelectedProject}
          isAddProject={isAddProject}
          projects={projects}
          clickedProject={clickedProject}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MainSection
                clickedProject={clickedProject}
                setNewProject={setNewProject}
                handleselectedproject={handleSelectedProject}
                isAddProject={isAddProject}
                deleteProject={deleteProject}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
