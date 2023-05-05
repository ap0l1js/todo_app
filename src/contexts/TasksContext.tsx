import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: string;
}

interface CreateTaskInput {
  title: string;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextType {
  tasks: Task[];
  createTask: (data: CreateTaskInput) => void;
}

export const TasksContext = React.createContext({} as TasksContextType);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const createTask = (data: CreateTaskInput) => {
    const newTask: Task = {
      id: uuidv4(),
      title: data.title,
      isDone: false,
      createdAt: Date.now().toString(),
    };

    setTasks((state) => [newTask, ...state]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
