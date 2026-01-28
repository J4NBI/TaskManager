import { createContext, useState, useEffect } from "react";

/**
 * React Context für die Verwaltung von Projekten und Tasks.
 *
 * Stellt Funktionen und State für die Projektmanipulation und State-Verfolgung zur Verfügung.
 * Dieses Context ist das zentrale Management-Element der Anwendung.
 *
 * @typedef {React.Context<TaskContextValue>} TaskContextValue
 * @property {Function} handleselectedproject - Handler-Funktion zum Umschalten des Add-Modus
 * @property {Function} setNewProject - Funktion zum Erstellen eines neuen Projekts
 * @property {Function} showProjectFromIndex - Funktion zum Anzeigen eines Projekts anhand des Index
 * @property {Function} deleteProject - Funktion zum Löschen eines Projekts
 * @property {Object|null} clickedProject - Das aktuell ausgewählte Projektobjekt
 * @property {string|number|null} projectId - Die ID des aktuellen Projekts
 * @property {boolean} isAddProject - Flag, das angibt, ob der Add-Project-Modus aktiv ist
 * @property {Array} projects - Array mit allen Projekten
 */
export const TaskContext = createContext({
  handleselectedproject: () => {},
  setNewProject: () => {},
  showProjectFromIndex: () => {},
  deleteProject: () => {},
  clickedProject: null,
  projectId: null,
  isAddProject: false,
  projects: [],
});

/**
 * Provider-Komponente für den TaskContext.
 *
 * Diese Komponente verwaltet den gesamten State für:
 * - Projektliste (mit localStorage Persistierung)
 * - Aktuell ausgewähltes Projekt
 * - Add-Project-Modus Status
 *
 * Alle State-Änderungen werden sofort im localStorage gespeichert,
 * um Datenpersistierung über Browser-Sessions zu ermöglichen.
 *
 * @component
 * @param {Object} props - Die Props der Komponente.
 * @param {React.ReactNode} props.children - Untergeordnete Komponenten, die Zugriff auf den Context haben.
 * @returns {JSX.Element} Der Task Context Provider mit Kindern
 *
 * @example
 * <TaskContextProvider>
 *   <App />
 * </TaskContextProvider>
 *
 * @description
 * Verwaltet folgende State-Variablen:
 * - isAddProject: Boolean für Add-Project-Modus
 * - projects: Array aller Projekte
 * - clickedProject: Das aktuell ausgewählte Projekt oder null
 *
 * Bietet folgende Funktionen via Context:
 * - handleselectedproject(): Toggle Add-Modus
 * - setNewProject(wert): Neues Projekt erstellen und speichern
 * - showProjectFromIndex(index): Projekt anhand Index auswählen
 * - deleteProject(id): Projekt und zugehörige Tasks löschen
 */
export function TaskContextProvider({ children }) {
  const [isAddProject, setIsAddProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [clickedProject, setClickedProject] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("savedProjects");
    if (!saved) {
      return;
    }
    setProjects(JSON.parse(saved));
  }, []);

  function setNewProject(wert) {
    const newProject = {
      ...wert,
      id: crypto.randomUUID(),
    };
    const newProjects = [...projects, newProject];
    setProjects(newProjects);
    localStorage.setItem("savedProjects", JSON.stringify(newProjects));
    handleSelectedProject();
  }

  function handleSelectedProject() {
    if (isAddProject) {
      setClickedProject(null);
    }
    setIsAddProject((prev) => !prev);
  }

  function showProjectFromIndex(index) {
    setIsAddProject(false);
    setClickedProject(projects[index]);
  }

  function deleteProject(id) {
    localStorage.removeItem(`tasks-${id}`);
    setProjects((prev) => {
      const updatedProjects = prev.filter((p) => id !== p.id);
      localStorage.setItem("savedProjects", JSON.stringify(updatedProjects));
      return updatedProjects;
    });
    setIsAddProject(false);
    setClickedProject(null);
  }

  const taskCtx = {
    handleselectedproject: handleSelectedProject,
    setNewProject,
    showProjectFromIndex,
    deleteProject,
    clickedProject,
    projectId: clickedProject ? clickedProject.id : null,
    isAddProject,
    projects,
  };

  return (
    <TaskContext.Provider value={taskCtx}>{children}</TaskContext.Provider>
  );
}
