import React from 'react';
import { ProjectContextProvider } from '../components/Context';
import TaskList from '../components/TaskList';
import Sidebar from '../components/Sidebar';

import StyledTasksPage from './style';

const TasksPage = () => {
  return (
    <ProjectContextProvider>
      <StyledTasksPage>
        <Sidebar />
        <TaskList />
      </StyledTasksPage>
    </ProjectContextProvider>
  );
};

export default TasksPage;
