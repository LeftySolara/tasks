import React, { createContext, useReducer } from 'react';

const TaskContext = createContext();
const initialState = [{ id: 0, title: 'Default Task', complete: false }];

/**
 * Updates the title of a task.
 *
 * @param {array} state The current list of tasks.
 * @param {string} taskID The UUID of the task to modify.
 * @param {string} title The new title of the task.
 * @returns {array} The list of tasks with the updated task included.
 */
const editTask = (state, taskID, title) => {
  const items = [...state];
  const targetIndex = items.findIndex((task) => task.id === taskID);

  items[targetIndex].title = title;
  return items;
};

/**
 * Toggles a task's completion status.
 *
 * @param {array} state The current list of tasks.
 * @param {string} taskID The UUID of the task to modify.
 * @returns {array} The list of tasks with the updated task included.
 */
const completeTask = (state, taskID) => {
  const items = [...state];
  const targetIndex = items.findIndex((item) => item.id === taskID);

  const target = items[targetIndex];
  target.complete = !target.complete;
  items[targetIndex] = target;
  return items;
};

/**
 * Reducer for the task list.
 *
 * @param {array} state The current list of tasks.
 * @param {Object} action The payload of information to use during reducer operations.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.payload);
    case 'READ':
      return state;
    case 'UPDATE':
      return editTask(state, action.payload.taskID, action.payload.title);
    case 'DELETE':
      return state.filter((task) => {
        return task.id !== action.payload.taskID;
      });
    case 'COMPLETE':
      return completeTask(state, action.payload.taskID);
    default:
      throw new Error();
  }
};

/**
 * Provider for the task context.
 */
const TaskContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
