import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import React from "react";

function App() {
  const [newProject, setNewProject] = React.useState(false);

  function handleSelectedProject() {
    setNewProject(true);
    console.log("Click");
  }

  return (
    <div className="h-full w-[100%]">
      <Navbar />
      <div className="grid grid-cols-6">
        <Sidebar
          handleselectedproject={handleSelectedProject}
          newproject={newProject}
        />
        <MainSection newproject={newProject} />
      </div>
    </div>
  );
}

export default App;
