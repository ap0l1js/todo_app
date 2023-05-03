import React from 'react';
import { Header } from '../../components/header';
import { TaskContainer } from '../../containers/task_container';

export function Home() {
  return (
    <React.Fragment>
      <Header />

      <TaskContainer />
    </React.Fragment>
  );
}
