import styled from 'styled-components';

const StyledTaskList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 66%;
`;

const StyledTaskListRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  background-color: #fcfcfa;
  border-bottom: 2px solid #8e8d8a;
`;

const StyledTaskListItem = styled.li`
  list-style: none;
`;

const StyledTaskDisplay = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  width: 80%;
`;

const StyledTaskName = styled.p`
  margin-left: 8px;
`;

const StyledAddTaskForm = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export {
  StyledTaskList as default,
  StyledTaskListItem,
  StyledTaskDisplay,
  StyledTaskListRow,
  StyledTaskName as StyledTaskTitle,
  StyledAddTaskForm,
};
