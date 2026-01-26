import { createContext } from "react";

export const TaskContext = createContext({
  handleselectedproject: () => {},
  setNewProject: () => {},
  projectId: null,
});
