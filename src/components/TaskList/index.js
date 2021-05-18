import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddTaskForm from './AddTaskForm';

/**
 * An item in the task list.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.task An object containing task information.
 */
const TaskListItem = (props) => {
  const { task } = props;
  return (
    <li>
      <input type="checkbox" checked={task.complete} />
      {task.title}
    </li>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
};

/**
 * An unordered list that displays the user's tasks.
 */
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    return { title, complete: false };
  };

  const handleAdd = (title) => {
    const newTask = createTask(title);
    setTasks(tasks.concat([newTask]));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return <TaskListItem task={task} />;
        })}
      </ul>
      <AddTaskForm onSubmit={handleAdd} />
    </div>
  );
};

export default TaskList;
