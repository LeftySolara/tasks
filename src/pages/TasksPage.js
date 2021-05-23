import React from 'react';
import { TaskContextProvider } from '../components/Context';
import TaskList from '../components/TaskList';
import StyledTasksPage from './style';

const TasksPage = () => {
  return (
    <TaskContextProvider>
      <StyledTasksPage>
        <TaskList />
      </StyledTasksPage>
    </TaskContextProvider>
  );
};

export default TasksPage;
