import React from 'react';
import { TaskContextProvider } from '../components/Context';
import TaskList from '../components/TaskList';
import StyledSidebar from '../components/Sidebar';

import StyledTasksPage from './style';

const TasksPage = () => {
  return (
    <TaskContextProvider>
      <StyledTasksPage>
        <StyledSidebar />
        <TaskList />
      </StyledTasksPage>
    </TaskContextProvider>
  );
};

export default TasksPage;
