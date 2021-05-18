import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v5 as uuidv5 } from 'uuid';
import AddTaskForm from './AddTaskForm';

const TASK_UUID_NAMESPACE = 'b1a166c1-d556-4027-8717-56e7dcd702d5';

/**
 * An item in the task list.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.task An object containing task information.
 * @param {function} props.onChange Callback function to execute when the checkbox is clicked.
 */
const TaskListItem = (props) => {
  const { task, onChange } = props;
  return (
    <li>
      <input type="checkbox" checked={task.complete} onChange={onChange} />
      {task.title}
    </li>
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
            <TaskListItem task={task} onChange={() => handleChange(task.id)} />
          );
        })}
      </ul>
      <AddTaskForm onSubmit={handleAdd} />
    </div>
  );
};

export default TaskList;
