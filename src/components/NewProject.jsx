import React from "react";

import { TaskContext } from "../store/task-context";
import { useContext } from "react";

/**
 * Komponente zum Erstellen eines neuen Projekts.
 *
 * @returns {JSX.Element}
 */
const NewProject = () => {
  const { handleselectedproject, setNewProject } = useContext(TaskContext);

  const sendProject = (formData) =>
    setNewProject({
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
    });

  return (
    <div className="container items-left">
      <div className="flex gap-4 ml-auto">
        <button
          onClick={handleselectedproject}
          className="font-semibold hover:text-black/50 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          form="projectForm"
          className="bg-black text-white/50 py-2 px-4 rounded-md hover:bg-black/40 hover:text-black transition duration-150 ease-in-out cursor-pointer"
        >
          Save
        </button>
      </div>

      <form id="projectForm" action={sendProject}>
        <label htmlFor="title" className="lab">
          TITLE
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="customInput"
          required
        />

        <label htmlFor="description" className="lab">
          DESCRIPTION
        </label>
        <textarea
          className="customInput"
          name="description"
          id="description"
          rows="6"
        />

        <label htmlFor="date" className="lab">
          DUE DATE
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="customInput"
          required
        />
      </form>
    </div>
  );
};

export default NewProject;
