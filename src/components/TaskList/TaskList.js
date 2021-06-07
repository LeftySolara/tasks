import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';

import { withFirebase } from '../Context';

import TaskListItem from './TaskListItem';
import AddTaskForm from './AddTaskForm';

const StyledTaskList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 66%;
  height: 100vh;
  color: ${(props) => props.theme.colors.foreground};
`;

const StyledTaskListItem = styled.li`
  list-style: none;
`;

const taskListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.task);
    default:
      throw new Error();
  }
};

/**
 * Unordered list that displays the user's tasks.
 */
const TaskListBase = (props) => {
  const { firebase } = props;
  const [listItems, dispatchListItems] = useReducer(taskListReducer, []);

  const handleAdd = (task) => {
    dispatchListItems({ type: 'ADD', task });
  };

  useEffect(() => {
    firebase.getUserTasks((snapshot) => {
      snapshot.forEach((snap) => {
        const task = snap.val();
        handleAdd(task);
      });
    });
  }, []);

  return (
    <StyledTaskList>
      <h2>Tasks</h2>
      <ul>
        {listItems.map((task) => {
          return <TaskListItem task={task} key={task.id} />;
        })}
        <StyledTaskListItem key="0">
          <AddTaskForm />
        </StyledTaskListItem>
      </ul>
    </StyledTaskList>
  );
};

const TaskList = withFirebase(TaskListBase);

export default TaskList;
