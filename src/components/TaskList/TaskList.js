import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext } from '../Context';

import TaskListItem from './TaskListItem';
import AddTaskForm from './AddTaskForm';

const StyledTaskList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 66%;
  height: 100vh;
  color: #3d3d3b;
`;

const StyledTaskListItem = styled.li`
  list-style: none;
`;

/**
 * Unordered list that displays the user's tasks.
 */
const TaskList = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, dispatchTasks] = useContext(TaskContext);

  const listItems = tasks.map((task) => {
    return <TaskListItem task={task} key={task.id} />;
  });

  return (
    <StyledTaskList>
      <h2>Tasks</h2>
      <ul>
        {listItems}
        <StyledTaskListItem key="0">
          <AddTaskForm />
        </StyledTaskListItem>
      </ul>
    </StyledTaskList>
  );
};

export default TaskList;
