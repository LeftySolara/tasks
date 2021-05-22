import React, { useState } from 'react';
import Button from '../Button';
import EditTaskForm from './EditTaskForm';

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

export default TaskListItem;
