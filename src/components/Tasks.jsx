import React from "react";

/**
 * Task-Komponente für Aufgabenverwaltung eines Projekts.
 *
 * @param {Object} props
 * @param {string} props.title - Titel des Projekts.
 * @returns {JSX.Element}
 */
const Task = ({ projectId }) => {
  const [tasks, setTasks] = React.useState([]);

  // Load tasks from localStorage on mount or when projectId changes
  React.useEffect(() => {
    const saved = localStorage.getItem(`tasks-${projectId}`);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, [projectId]);

  function handleTaskFormSubmit(formdata) {
    const newTask = {
      id: crypto.randomUUID(),
      text: formdata.get("taskInput"),
    };

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, newTask];
      localStorage.setItem(`tasks-${projectId}`, JSON.stringify(newTasks));
      return newTasks;
    });
  }

  function handleTaskDelete(taskId) {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem(`tasks-${projectId}`, JSON.stringify(newTasks));
      return newTasks;
    });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-4">Tasks</h2>
      <form className="flex items-center gap-2" action={handleTaskFormSubmit}>
        <input
          className="w-1/2 border border-gray-300 rounded-md p-2 bg-gray-300 focus:border-gray-500 focus:ring-0 outline-none"
          type="text"
          name="taskInput"
          placeholder="New Task"
          required
        />
        <button
          type="submit"
          className="bg-gray-500 text-white rounded-md px-4 py-2 hover:text-black hover:opacity-80 flex-1 max-w-[100px]"
        >
          Add Task
        </button>
      </form>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mt-2 p-2 border border-gray-300 rounded-md bg-gray-200"
        >
          <div className="flex justify-between items-center">
            {task.text}
            <button
              onClick={() => handleTaskDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              clear
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
