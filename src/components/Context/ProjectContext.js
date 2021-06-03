import React, { createContext, useReducer } from 'react';
import { v5 as uuidv5 } from 'uuid';

const PROJECT_UUID_NAMESPACE = '29444795-6d9d-551b-add3-7ff7a5422e0f';
const TASK_UUID_NAMESPACE = 'b1a166c1-d556-4027-8717-56e7dcd702d5';

const initialProjects = [{ id: 0, title: 'Default Project' }];
const initialTasks = [{ id: 0, title: 'Default Task' }];

const ProjectContext = createContext(initialProjects);
const TaskContext = createContext(initialTasks);

/**
 * Adds a new task to the current state.
 *
 * @param {Array} state The current list of tasks.
 * @param {String} title The title of the new task.
 * @returns {Array} The state with the new task added.
 */
const addTask = (state, title) => {
  const id = uuidv5(title, TASK_UUID_NAMESPACE);
  const newTask = { id, title, complete: false };
  return state.concat(newTask);
};

/**
 * Updates the title of a task.
 *
 * @param {Array} state The current list of tasks.
 * @param {String} taskID The UUID of the task to modify.
 * @param {String} title The new title of the task.
 * @returns {Array} The list of tasks with the updated task included.
 */
const editTask = (state, taskID, title) => {
  const items = [...state];
  const targetIndex = items.findIndex((item) => item.id === taskID);

  items[targetIndex].title = title;
  return items;
};

/**
 * Toggles a task's completion status.
 *
 * @param {Array} state The current list of tasks.
 * @param {String} taskID The UUID of the task to modify.
 * @returns {Array} The list of tasks with the updated task included.
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
 * Removes a task from the current state.
 *
 * @param {Array} state The current list of tasks.
 * @param {String} taskID The UUID of the task to remove.
 * @returns {Array} The list of tasks with the target removed
 */
const removeTask = (state, taskID) => {
  return state.filter((task) => {
    return task.id !== taskID;
  });
};

/**
 * Adds a project to the current state.
 *
 * @param {Array} state The current list of projects.
 * @param {String} title The title to assign to the new task.
 * @returns {Array} Thelist of projects with the new project added.
 */
const addProject = (state, title, firebase) => {
  const id = uuidv5(title, PROJECT_UUID_NAMESPACE);
  const newProject = { id, title };
  firebase.addProject(newProject);

  return state.concat(newProject);
};

/**
 * Updates the title of a project.
 *
 * @param {Array} state The current list of projects.
 * @param {String} projectID The UUID of the project to modify.
 * @param {String} title The new title of the project.
 * @returns
 */
const editProject = (state, projectID, title) => {
  const items = [...state];
  const targetIndex = items.findIndex((project) => project.id === projectID);

  items[targetIndex].title = title;
  return items;
};

/**
 * Removes a project from the current state.
 *
 * @param {Array} state The current list of projects.
 * @param {String} projectID The UUID of the project to remove.
 * @returns {Array} The list of projects with the requested project removed.
 */
const removeProject = (state, projectID) => {
  return state.filter((project) => {
    return project.id !== projectID;
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return addTask(state, action.payload.title);
    case 'GET_TASKS':
      return state;
    case 'EDIT_TASK':
      return editTask(state, action.payload.id, action.payload.title);
    case 'REMOVE_TASK':
      return removeTask(state, action.payload.id);
    case 'COMPLETE_TASK':
      return completeTask(state, action.payload.taskID);
    case 'ADD_PROJECT':
      return addProject(state, action.payload.title, action.firebase);
    case 'GET_PROJECTS':
      return state;
    case 'EDIT_PROJECT':
      return editProject(state, action.payload.id, action.payload.title);
    case 'REMOVE_PROJECT':
      return removeProject(state, action.payload.id);
    default:
      return new Error();
  }
};

const ProjectContextProvider = (props) => {
  const { children } = props;

  const [tasks, dispatchTasks] = useReducer(reducer, initialTasks);
  const [projects, dispatchProjects] = useReducer(reducer, initialProjects);

  return (
    <ProjectContext.Provider value={[projects, dispatchProjects]}>
      <TaskContext.Provider value={[tasks, dispatchTasks]}>
        {children}
      </TaskContext.Provider>
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider, TaskContext };
