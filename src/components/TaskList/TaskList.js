import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { TaskContext, withFirebase } from '../Context';

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

/**
 * Unordered list that displays the user's tasks.
 */
const TaskListBase = (props) => {
  const { firebase } = props;
  // eslint-disable-next-line no-unused-vars
  const [tasks, dispatchTasks] = useContext(TaskContext);
  const listItems = [];

  useEffect(() => {
    firebase.getUserTasks((snapshot) => {
      snapshot.forEach((snap) => {
        const data = snap.val();
        listItems.push(data);
      });
    });
  }, []);

  return (
    <StyledTaskList>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => {
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
