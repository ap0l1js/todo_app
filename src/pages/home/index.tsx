import React from 'react';
import { Header } from '../../components/header';
import { TaskContainer } from '../../containers/task_container';
import { TasksProvider } from '../../contexts/TasksContext';

export function Home() {
  return (
    <React.Fragment>
      <Header />

      <TasksProvider>
        <TaskContainer />
      </TasksProvider>
    </React.Fragment>
  );
}
