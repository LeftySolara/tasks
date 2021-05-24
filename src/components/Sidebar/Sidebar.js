import React from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';

const StyledSidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background-color: #e98074;
  width: 250px;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h2>Projects</h2>
      <ProjectList />
    </StyledSidebar>
  );
};

export default Sidebar;
