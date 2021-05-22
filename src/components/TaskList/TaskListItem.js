import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import EditTaskForm from './EditTaskForm';

/**
 * An item in the task list.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.task The task whose information to display.
 * @param {function} props.onEdit Callback to execute when the edit form is submitted.
 * @param {function} props.onDelete Callback to execute when the "Delete" button is pressed.
 */
const TaskListItem = (props) => {
  const { task, onEdit, onDelete } = props;
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => setEditing(!editing);

  const editForm = (
    <EditTaskForm
      task={task}
      onSubmit={onEdit}
      onBlur={toggleEditing}
      onUnmount={toggleEditing}
    />
  );

  const taskDisplay = (
    <>
      {task.title}
      <Button text="Edit" onClick={toggleEditing} />
      <Button text="Delete" onClick={onDelete} />
    </>
  );

  return <li key={task.id}>{editing ? editForm : taskDisplay}</li>;
};

EditTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskListItem;
