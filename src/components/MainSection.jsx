import React from "react";
import EmptyProject from "./EmptyProject";
import NewProject from "./NewProject";

const MainSection = ({ newproject, handleselectedproject, setNewProject }) => {
  return (
    <div className="w-full col-span-4">
      {newproject ? (
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
