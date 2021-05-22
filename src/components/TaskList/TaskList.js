import React, { useContext } from 'react';
import { v5 as uuidv5 } from 'uuid';

import { TaskContext } from '../Context';
import TaskListItem from './TaskListItem';
import AddTaskForm from './AddTaskForm';

const TASK_UUID_NAMESPACE = 'b1a166c1-d556-4027-8717-56e7dcd702d5';

/**
 * Unordered list that displays the user's tasks.
 */
const TaskList = () => {
  const [tasks, dispatchTasks] = useContext(TaskContext);

  /**
   * Adds a new task to the global state.
   */
  const addTask = (title) => {
    const id = uuidv5(title, TASK_UUID_NAMESPACE);
    const newTask = { id, title };
    dispatchTasks({ type: 'CREATE', payload: newTask });
  };

  /**
   * Updates a task's information.
   *
   * @param {string} taskID The UUID of the task to update.
   * @param {string} title The new title of the task.
   */
  const editTask = (taskID, title) => {
    dispatchTasks({ type: 'UPDATE', payload: { taskID, title } });
  };

  /**
   * Removes a task from the global state.
   *
   * @param {string} taskID The UUID of the task to remove.
   */
  const deleteTask = (taskID) => {
    dispatchTasks({ type: 'DELETE', payload: { taskID } });
  };

  const listItems = tasks.map((task) => {
    return (
      <TaskListItem
        task={task}
        onEdit={editTask}
        onDelete={() => deleteTask(task.id)}
      />
    );
  });

  return (
    <ul>
      {listItems}
      <li>
        <AddTaskForm onSubmit={addTask} />
      </li>
    </ul>
  );
};

export default TaskList;
