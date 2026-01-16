import React from "react";
import Button from "./Button";

import { BsClipboard2Data } from "react-icons/bs";

const EmptyProject = () => {
  return (
    <div className=" h-full w-full flex flex-col gap-6 items-center justify-center">
      <BsClipboard2Data size={70} />
      <h2 className="text-2xl font-bold text-black/60">No Project Selected</h2>
      <p className="text-black/60">
        Select a project or get started with a new one
      </p>
      <Button text="Create new project" />
    </div>
  );
};

export default EmptyProject;
