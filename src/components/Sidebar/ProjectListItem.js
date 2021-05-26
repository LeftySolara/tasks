import React from 'react';
import styled from 'styled-components';

const StyledProjectListItem = styled.li`
  list-style: none;
  text-align: left;
  padding-left: 15px;
  margin-bottom: 5px;
  border: 10px solid ${(props) => (props.selected ? '#fcfcfa' : '#e98074')};
  font-weight: bold;
  background-color: ${(props) => (props.selected ? '#fcfcfa' : '#e98074')};
  color: ${(props) => (props.selected ? '#e98074' : 'fcfcfa')};
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
