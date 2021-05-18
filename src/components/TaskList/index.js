import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v5 as uuidv5 } from 'uuid';
import styled from 'styled-components';
import AddTaskForm from './AddTaskForm';
import Button from '../Button';

const TASK_UUID_NAMESPACE = 'b1a166c1-d556-4027-8717-56e7dcd702d5';

const StyledTaskListItem = styled.li`
  font-size: 1em;
  text-align: left;
  color: ${(props) => (props.checked ? 'gray' : 'black')};
  list-style: none;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

/**
 * An item in the task list.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.task An object containing task information.
 * @param {function} props.onChange Callback function to execute when the checkbox is clicked.
 * @param {function} props.onDelete Callback function to handle deleting the task.
 */
const TaskListItem = (props) => {
  const { task, onChange, onDelete } = props;
  return (
    <StyledTaskListItem checked={task.complete}>
      <input type="checkbox" checked={task.complete} onChange={onChange} />
      {task.title}
      <Button text="Delete" onClick={onDelete} primary />
    </StyledTaskListItem>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

/**
 * An unordered list that displays the user's tasks.
 */
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    return { title, id: uuidv5(title, TASK_UUID_NAMESPACE), complete: false };
  };

  const handleAdd = (title) => {
    const newTask = createTask(title);
    setTasks(tasks.concat([newTask]));
  };

  /**
   * Removes a task from the list.
   *
   * @param {string} taskID The uuid of the task to remove.
   */
  const handleDelete = (taskID) => {
    const items = [...tasks];
    const filtered = items.filter((item) => {
      return item.id !== taskID;
    });
    setTasks(filtered);
  };

  /**
   * Updates a task's completion status when its checkbox is clicked.
   *
   * @param {Object} taskID The uuid of the task to update.
   */
  const handleChange = (taskID) => {
    const items = [...tasks];
    const targetIndex = items.findIndex((item) => {
      return item.id === taskID;
    });

    const target = items[targetIndex];
    target.complete = !target.complete;
    items[targetIndex] = target;
    setTasks(items);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <TaskListItem
              task={task}
              onChange={() => handleChange(task.id)}
              onDelete={() => handleDelete(task.id)}
            />
          );
        })}
      </ul>
      <AddTaskForm onSubmit={handleAdd} />
    </div>
  );
};

export default TaskList;
