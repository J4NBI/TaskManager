import React from "react";

/**
 * Task-Komponente für Aufgabenverwaltung eines Projekts.
 *
 * @param {Object} props
 * @param {string} props.title - Titel des Projekts.
 * @returns {JSX.Element}
 */
const Task = ({ title }) => {
  // State für die randomNumber, die sich bei title-Änderung aktualisiert
  const [randomNumber, setRandomNumber] = React.useState("");

  // Bei Titeländerung: randomNumber aus LocalStorage holen oder neu erzeugen
  React.useEffect(() => {
    const key = `${title}-random`;
    let random = localStorage.getItem(key);
    if (!random) {
      random = Math.floor(Math.random() * 1000000).toString();
      localStorage.setItem(key, random);
    }
    setRandomNumber(random);
  }, [title]);

  const [tasks, setTasks] = React.useState([]);

  function handleTaskFormSubmit(formdata) {
    const newTask = formdata.get("taskInput");
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Gespeicherte Tasks aus LocalStorage laden, wenn title oder randomNumber sich ändern
  React.useEffect(() => {
    if (!randomNumber) return;
    setTasks([]);
    const saved = localStorage.getItem(title + randomNumber);
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks([]);
    }
  }, [title, randomNumber]);

  // Tasks speichern in LocalStorage
  React.useEffect(() => {
    if (!randomNumber) return;
    localStorage.setItem(title + randomNumber, JSON.stringify(tasks));
  }, [tasks, title, randomNumber]);

  // Task löschen
  function handleTaskDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((p, i) => i !== index));
    localStorage.setItem(title + randomNumber, JSON.stringify(tasks));
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-4">
        Tasks <span className="text-xs text-gray-500">#{randomNumber}</span>
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
          <div className="flex justify-between items-center">
            {task}
            <button
              onClick={() => handleTaskDelete(index)}
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
