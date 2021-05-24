import React from 'react';
import { TaskContextProvider } from '../components/Context';
import TaskList from '../components/TaskList';
import Sidebar from '../components/Sidebar';

import StyledTasksPage from './style';

const TasksPage = () => {
  return (
    <TaskContextProvider>
      <StyledTasksPage>
        <Sidebar />
        <TaskList />
      </StyledTasksPage>
    </TaskContextProvider>
  );
};

export default TasksPage;
