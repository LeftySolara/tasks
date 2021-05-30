import React from 'react';
import styled from 'styled-components';

const StyledProjectListItem = styled.li`
  list-style: none;
  text-align: left;
  padding-left: 15px;
  margin-bottom: 5px;
  border: 10px solid
    ${(props) =>
      props.selected ? props.theme.colors.accent : props.theme.colors.grey};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.accent : props.theme.colors.grey};
  color: ${(props) => props.theme.colors.foreground}
  font-weight: bold;
`;

const ProjectListItem = (props) => {
  const { title, selected, onClick } = props;

  return (
    <StyledProjectListItem onClick={onClick} selected={selected}>
      {title}
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
