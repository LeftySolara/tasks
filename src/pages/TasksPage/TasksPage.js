import React from 'react';
import styled from 'styled-components';
import {
  ProjectContextProvider,
  TaskContextProvider,
  withAuthorization,
} from '../../components/Context';
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
      <TaskContextProvider>
        <StyledTasksPage>
          <Sidebar />
          <TaskList />
        </StyledTasksPage>
      </TaskContextProvider>
    </ProjectContextProvider>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(TasksPage);
