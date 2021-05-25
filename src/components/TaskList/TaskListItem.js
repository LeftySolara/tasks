import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../Context';
import Button from '../Button';
import EditTaskForm from './EditTaskForm';
import {
  StyledTaskDisplay,
  StyledTaskListItem,
  StyledTaskListItemButtonBox,
  StyledTaskListRow,
  StyledTaskTitle,
} from './style';

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
