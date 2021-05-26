import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { ProjectContext } from '../Context';
import ProjectListItem from './ProjectListItem';
import AddProjectForm from './AddProjectForm';

const StyledProjectList = styled.ul`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

/**
 * A list of items to display in the sidebar.
 */
const ProjectList = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, dispatchProjects] = useContext(ProjectContext);
  const [selectedID, setSelectedID] = useState(projects[0].id);

  const listItems = projects.map((project) => {
    return (
      <ProjectListItem
        title={project.title}
        key={project.id}
        selected={project.id === selectedID}
        onClick={() => setSelectedID(project.id)}
      />
    );
  });

  return (
    <StyledProjectList>
      {listItems}
      <li style={{ 'list-style': 'none' }}>
        <AddProjectForm />
      </li>
    </StyledProjectList>
  );
};

export default ProjectList;
