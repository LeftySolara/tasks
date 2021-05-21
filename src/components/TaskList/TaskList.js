import React, { useContext } from 'react';
import { v5 as uuidv5 } from 'uuid';
import { TaskContext } from '../Context';
import AddTaskForm from './AddTaskForm';
import Button from '../Button';

const TASK_UUID_NAMESPACE = 'b1a166c1-d556-4027-8717-56e7dcd702d5';

const TaskList = () => {
  const [tasks, dispatchTasks] = useContext(TaskContext);

  const addTask = (title) => {
    const id = uuidv5(title, TASK_UUID_NAMESPACE);
    const newTask = { id, title };
    dispatchTasks({ type: 'CREATE', payload: newTask });
  };

  const deleteTask = (taskID) => {
    dispatchTasks({ type: 'DELETE', payload: { taskID } });
  };

  const listItems = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.title}{' '}
        <Button text="Delete" onClick={() => deleteTask(task.id)} />
      </li>
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
