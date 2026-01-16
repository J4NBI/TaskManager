import React from "react";
import Button from "./Button";

const NewProject = () => {
  return (
    <div className="ml-8 mr-20 flex flex-col items-left justify-center h-full gap-4 p-4">
      <div className="flex gap-4 ml-auto">
        <button className="font-semibold hover:text-black/50">Cancel</button>
        <button className="bg-black text-white/50 py-2 px-4 rounded-md hover:bg-black/40 hover:text-black transition duration-150 ease-in-out">
          Save
        </button>
      </div>

      <form>
        <h2>Title</h2>
      </form>
    </div>
  );
};

export default NewProject;
