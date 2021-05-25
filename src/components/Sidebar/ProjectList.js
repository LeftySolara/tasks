import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProjectContext } from '../Context';
import ProjectListItem from './ProjectListItem';

const StyledSidebarList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

/**
 * A list of items to display in the sidebar.
 */
const SidebarList = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, dispatchProjects] = useContext(ProjectContext);

  const listItems = projects.map((project) => {
    return <ProjectListItem title={project.title} key={project.id} />;
  });

  return (
    <StyledSidebarList>
      <ul>{listItems}</ul>
    </StyledSidebarList>
  );
};

export default SidebarList;
