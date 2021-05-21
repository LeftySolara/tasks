import React from 'react';
import { TaskContextProvider } from '../components/Context';
import TaskList from '../components/TaskList';

const TasksPage = () => {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
};

export default TasksPage;
