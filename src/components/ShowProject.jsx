import React, { useContext, useRef } from "react";
import ChangeDate from "../util/ChangeDate";
import Tasks from "./Tasks";
import { TaskContext } from "../store/task-context";

const ShowProject = ({ deleteProject }) => {
  const taskCtx = useContext(TaskContext);
  const clickedProject = taskCtx.clickedProject;
  const dialogRef = useRef(null);

  function openDialog() {
    dialogRef.current.showModal();
  }

  function closeDialog() {
    dialogRef.current.close();
  }

  function confirmDelete() {
    deleteProject(clickedProject.id);
    closeDialog();
  }

  return (
    <div className="container">
      <dialog ref={dialogRef} className="rounded-md p-6 self-center m-auto">
        <h2 className="text-xl font-bold mb-4">Delete?</h2>
        <p className="mb-6 text-black/70">
          This Project and all Tasks will be deleted. Are you sure?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={closeDialog}
            className="px-4 py-2 rounded-md bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 rounded-md bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </dialog>

      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          {clickedProject.title ?? "Kein Titel"}
        </h1>
        <button
          onClick={openDialog}
          className="text-black/60 font-bold cursor-pointer"
        >
          Delete
        </button>
      </div>

      <p className="text-sm text-black/60">{ChangeDate(clickedProject.date)}</p>
      <p>{clickedProject.description}</p>

      <hr className="text-gray-500/40 border rounded-md" />
      <Tasks projectId={clickedProject.id} />
    </div>
  );
};

export default ShowProject;
