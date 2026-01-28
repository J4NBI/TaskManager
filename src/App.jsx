import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { TaskContextProvider } from "./store/task-context";

/**
 * Haupt-App-Komponente für das TaskManager-Projekt.
 *
 * Diese Komponente ist der Entry Point der Anwendung und wrappet alle
 * Komponenten mit dem TaskContextProvider, um Context-basierte State-Verwaltung
 * für Projekte und Tasks zu ermöglichen.
 *
 * @component
 * @returns {JSX.Element} Die Root-Komponente mit Navbar, Sidebar und MainSection
 */
const App = () => (
  <TaskContextProvider>
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="md:grid md:grid-cols-6 flex-1">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  </TaskContextProvider>
);

export default App;
