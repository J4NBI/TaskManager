import React from "react";

/**
 * Task-Komponente für Aufgabenverwaltung eines Projekts.
 *
 * @param {Object} props
 * @param {string} props.title - Titel des Projekts.
 * @returns {JSX.Element}
 */
const Task = ({ title }) => {
  // Prüfe, ob schon eine Zufallszahl für dieses Projekt im LocalStorage ist
  const getOrCreateRandom = () => {
    const key = `${title}-random`;
    let random = localStorage.getItem(key);
    if (!random) {
      random = Math.floor(Math.random() * 1000000).toString();
      localStorage.setItem(key, random);
    }
    return random;
  };

  const randomNumber = React.useRef(getOrCreateRandom());
  const [tasks, setTasks] = React.useState([]);

  function handleTaskFormSubmit(formdata) {
    const newTask = formdata.get("taskInput");
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Gespeicherte Tasks aus LocalStorage laden
  React.useEffect(() => {
    const saved = localStorage.getItem(title + randomNumber.current);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, [title]);

  // Tasks speichern in LocalStorage
  React.useEffect(() => {
    localStorage.setItem(title + randomNumber.current, JSON.stringify(tasks));
  }, [tasks, title]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-4">
        Tasks{" "}
        <span className="text-xs text-gray-500">#{randomNumber.current}</span>
      </h2>
      <form className="flex items-center gap-2" action={handleTaskFormSubmit}>
        <input
          className="border border-gray-300 rounded-md p-2 bg-gray-300 focus:border-gray-500 focus:ring-0 outline-none"
          type="text"
          name="taskInput"
          placeholder="New Task"
          required
        />
        <button
          type="submit"
          className="bg-gray-500 text-white rounded-md px-4 py-2 hover:text-black hover:opacity-80 cursor-pointer"
        >
          Add Task
        </button>
      </form>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="mt-2 p-2 border border-gray-300 rounded-md bg-gray-200"
        >
          {task}
        </div>
      ))}
    </div>
  );
};

export default Task;
