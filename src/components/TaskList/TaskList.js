import React, { useContext } from 'react';

import { TaskContext } from '../Context';

import TaskListItem from './TaskListItem';
import AddTaskForm from './AddTaskForm';
import StyledTaskList, { StyledTaskListItem } from './style';

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
