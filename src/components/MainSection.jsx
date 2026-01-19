import React from "react";
import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";
import ShowProject from "./ShowProject";

const MainSection = ({
  newproject,
  handleselectedproject,
  setNewProject,
  showProject,
}) => {
  return (
    <div className="w-full col-span-4">
      {showProject && !newproject ? (
        <ShowProject showProject={showProject} />
      ) : newproject ? (
        <NewProject
          setNewProject={setNewProject}
          handleselectedproject={() => handleselectedproject()}
        />
      ) : (
        <EmptyProject handleselectedproject={() => handleselectedproject()} />
      )}
    </div>
  );
};

export default MainSection;
