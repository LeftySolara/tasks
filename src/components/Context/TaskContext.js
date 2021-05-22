import React, { createContext, useReducer } from 'react';

const TaskContext = createContext();
const initialState = [{ id: 0, title: 'Default Task' }];

const editTask = (state, taskID, title) => {
  const items = [...state];
  const targetIndex = items.findIndex((task) => task.id === taskID);

  items[targetIndex].title = title;
  return items;
};

/**
 * Reducer for the task list.
 *
 * @param {any} state The state to modify.
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
