import styled from 'styled-components';

const StyledTaskList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 66%;
  color: #3d3d3b;
`;

const StyledTaskListRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  background-color: #fcfcfa;
  border-bottom: 2px solid #dfdfde;
  font-size: 1em;
`;

const StyledTaskListItem = styled.li`
  list-style: none;
`;

const StyledTaskListItemButtonBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const StyledTaskDisplay = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

const StyledTaskName = styled.p`
  margin-left: 8px;
`;

const StyledAddTaskForm = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1em;
  border-bottom: 2px solid #dfdfde;
  width: 100%;
`;

const StyledAddTaskFormInput = styled.input`
  background-color: #fcfcfa;
  color: #3d3d3b;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid #fcfcfa;
  :focus {
    outline: none;
  }
`;

const StyledAddTaskButton = styled.button`
  background-color: #fcfcfa;
  color: #3d3d3b;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid #fcfcfa;
`;

const StyledAddTaskContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export {
  StyledTaskList as default,
  StyledTaskListItem,
  StyledTaskListItemButtonBox,
  StyledTaskDisplay,
  StyledTaskListRow,
  StyledTaskName as StyledTaskTitle,
  StyledAddTaskForm,
  StyledAddTaskFormInput,
  StyledAddTaskButton,
  StyledAddTaskContainer,
};
