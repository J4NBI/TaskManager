import React from "react";
import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";
import ShowProject from "./ShowProject";
import { TaskContext } from "../store/task-context";
import { useContext } from "react";

const MainSection = ({
  isAddProject,
  handleselectedproject,
  setNewProject,
  deleteProject,
}) => {
  const taskCtx = useContext(TaskContext);
  const clickedProject = taskCtx.clickedProject;
  if (isAddProject) {
    return (
      <div className="w-full col-span-4">
        <NewProject
          setNewProject={setNewProject}
          handleselectedproject={handleselectedproject}
        />
      </div>
    );
  }

  if (clickedProject) {
    return (
      <div className="w-full col-span-4">
        <ShowProject deleteProject={deleteProject} />
      </div>
    );
  }

  return (
    <div className="w-full col-span-4">
      <EmptyProject handleselectedproject={handleselectedproject} />
    </div>
  );
};

export default MainSection;
