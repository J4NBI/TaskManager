import React from "react";
import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";

const MainSection = ({ newproject }) => {
  const [projects, setProjects] = React.useState([
    {
      title: "Learn React",
      description: "Learn react to get Job as developer",
      date: 12,
    },
  ]);
  const [selectedProject, setSelectedProject] = React.useState();

  return (
    <div className="w-full col-span-4">
      {selectedProject || newproject ? <NewProject /> : <EmptyProject />}
    </div>
  );
};

export default MainSection;
