import React from 'react';
import styled from 'styled-components';

const StyledProjectListItem = styled.li`
  list-style: none;
`;

const ProjectListItem = (props) => {
  const { title } = props;

  return <StyledProjectListItem>{title}</StyledProjectListItem>;
};

export default ProjectListItem;
