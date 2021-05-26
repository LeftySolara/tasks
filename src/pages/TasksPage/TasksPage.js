import React from 'react';
import styled from 'styled-components';
import { ProjectContextProvider } from '../../components/Context';
import TaskList from '../../components/TaskList';
import Sidebar from '../../components/Sidebar';

const StyledTasksPage = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

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