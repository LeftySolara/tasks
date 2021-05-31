import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TaskContext } from '../Context';
import Button from '../Button';
import EditTaskForm from './EditTaskForm';

const StyledTaskListRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  font-size: 1em;
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
  color: ${(props) =>
    props.complete ? props.theme.colors.grey : props.theme.colors.foreground};
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
`;

const StyledTaskListItem = styled.li`
  list-style: none;
`;

const StyledTaskTitle = styled.p`
  margin-left: 8px;
`;
/**
 * An item in the task list.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.task The task whose information to display.
 */
const TaskListItem = (props) => {
  const { task } = props;
  const [editing, setEditing] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [tasks, dispatchTasks] = useContext(TaskContext);

  const toggleEditing = () => setEditing(!editing);

  const handleDelete = () => {
    dispatchTasks({ type: 'REMOVE_TASK', payload: { id: task.id } });
  };

  const handleCheck = () => {
    dispatchTasks({ type: 'COMPLETE_TASK', payload: { taskID: task.id } });
  };

  const editForm = (
    <EditTaskForm
      task={task}
      onBlur={toggleEditing}
      onUnmount={toggleEditing}
    />
  );

  const buttonBox = (
    <StyledTaskListItemButtonBox>
      <Button text="Edit" onClick={toggleEditing} />
      <Button text="Delete" onClick={handleDelete} primary />
    </StyledTaskListItemButtonBox>
  );

  const taskDisplay = (
    <StyledTaskDisplay complete={task.complete}>
      <input
        type="checkbox"
        defaultChecked={task.complete}
        onClick={handleCheck}
      />
      <StyledTaskTitle>{task.title}</StyledTaskTitle>
    </StyledTaskDisplay>
  );

  const taskListRow = (
    <StyledTaskListRow>
      {taskDisplay}
      {buttonBox}
    </StyledTaskListRow>
  );

  return (
    <StyledTaskListItem key={task.id}>
      {editing ? editForm : taskListRow}
    </StyledTaskListItem>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskListItem;
