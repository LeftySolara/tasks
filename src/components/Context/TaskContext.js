import React, { createContext, useContext, useReducer } from 'react';
import { v5 as uuidv5 } from 'uuid';

import FirebaseContext from './FirebaseContext';

const TASK_UUID_NAMESPACE = 'b1a166c1-d556-4027-8717-56e7dcd702d5';

const initialState = [];
const TaskContext = createContext(initialState);

/**
 * Adds a new task to the current state.
 *
 * @param {Array} tasks The current list of tasks.
 * @param {String} title The title of the new task.
 * @returns {Array} The state with the new task added.
 */
const addTask = (tasks, title) => {
  const firebase = useContext(FirebaseContext);
  const id = uuidv5(title, TASK_UUID_NAMESPACE);
  const newTask = { id, title, complete: false };

  firebase.addTask(newTask);

  const items = [...tasks];
  items.push(newTask);

  return items;
};

const getTasks = () => {
  const firebase = useContext(FirebaseContext);
  return firebase.getUserTasks();
};

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'ADD':
      return addTask(tasks, action.payload.title);
    case 'GET':
      return getTasks();
    default:
      throw new Error();
  }
};

const TaskContextProvider = (props) => {
  const { children } = props;

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={[tasks, dispatchTasks]}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
