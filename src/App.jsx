import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import React from "react";

function App() {
  //CLICK NEW PROJECT STATE
  const [isProject, setIsProject] = React.useState(false);

  //SAVED PROJECTS STATE
  const [projects, setProjects] = React.useState([
    { title: "Test", description: "Test description", date: "2026-01-18" },
  ]);

  // GET NEW PROJECT FROM NEWPROJECT COMPONENT
  function setNewProject(wert) {
    setProjects((prevProjects) => [...prevProjects, wert]);
  }

  function handleSelectedProject() {
    setIsProject((prev) => !prev);
  }

  return (
    <div className="h-full w-[100%]">
      <Navbar />
      <div className="grid grid-cols-6">
        <Sidebar
          handleselectedproject={handleSelectedProject}
          newproject={isProject}
          projects={projects}
        />
        <MainSection
          setNewProject={setNewProject}
          handleselectedproject={handleSelectedProject}
          newproject={isProject}
        />
      </div>
    </div>
  );
}

export default App;
