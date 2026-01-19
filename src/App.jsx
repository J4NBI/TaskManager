import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import React from "react";

function App() {
  //CLICK NEW PROJECT STATE
  const [isProject, setIsProject] = React.useState(false);

  //SAVED PROJECTS STATE
  const [projects, setProjects] = React.useState([]);
  // SET IF PROJECT IS CLICKED SHOW PROJECT
  const [showProject, setShowProject] = React.useState();
  // GET NEW PROJECT FROM NEWPROJECT COMPONENT
  function setNewProject(wert) {
    const newProjects = [...projects, wert];
    setProjects(() => newProjects);
    localStorage.setItem("savedProjects", JSON.stringify(newProjects));
  }

  // SET IF IS NEW PROJECT CLICKED
  function handleSelectedProject() {
    setIsProject((prev) => !prev);
  }

  // Show from index Project
  function showProjectFromIndex(index) {
    setIsProject(false);
    const showIndexProject = projects.filter((p, i) => index === i);
    setShowProject((prev) => [showIndexProject, index]);
    console.log(showProject);
  }

  // SHOW LOCALSTOREAGE PROJECTS
  React.useEffect(() => {
    const saved = localStorage.getItem("savedProjects");
    console.log(saved);
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

  // DELETE PROJECT
  function deleteProject(index) {
    setProjects((prev) => prev.filter((p, i) => i !== index));
    setIsProject(() => false);
  }

  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="grid grid-cols-6">
        <Sidebar
          showProjectFromIndex={showProjectFromIndex}
          handleselectedproject={handleSelectedProject}
          newproject={isProject}
          projects={projects}
          showProject={showProject}
        />
        <MainSection
          showProject={showProject}
          setNewProject={setNewProject}
          handleselectedproject={handleSelectedProject}
          newproject={isProject}
          deleteProject={deleteProject}
        />
      </div>
    </div>
  );
}

export default App;
