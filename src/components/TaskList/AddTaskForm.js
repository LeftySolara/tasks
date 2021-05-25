import React, { useContext, useEffect, useRef, useState } from 'react';
import { TaskContext } from '../Context';
import {
  StyledAddTaskButton,
  StyledAddTaskContainer,
  StyledAddTaskForm,
  StyledAddTaskFormInput,
} from './style';

/**
 * Form for adding new tasks.
 * When the form is inactive, a button that makes it active is rendered.
 */
const AddTaskForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, dispatchTasks] = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');
  const textInput = useRef(null);

  /**
   * Switches the form's current editing state.
   */
  const toggleEditing = () => {
    setEditing(!editing);
  };

  /**
   * Wrapper for executing the given callback prop.
   *
   * @param {event} event The event created by the form submission.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchTasks({ type: 'ADD_TASK', payload: { title: text } });
    setText('');
    toggleEditing();
  };

  const button = (
    <StyledAddTaskButton type="button" onClick={toggleEditing}>
      <span>+ &nbsp; Add Task</span>
    </StyledAddTaskButton>
  );

  const form = (
    <StyledAddTaskForm onSubmit={handleSubmit}>
      <StyledAddTaskFormInput
        type="text"
        value={text}
        placeholder="Task Description"
        onChange={(e) => setText(e.target.value)}
        onBlur={toggleEditing}
        ref={textInput}
        required
      />
    </StyledAddTaskForm>
  );

  useEffect(() => {
    if (editing) {
      textInput.current.focus();
    }
  }, [editing]);

  return (
    <StyledAddTaskContainer>{editing ? form : button}</StyledAddTaskContainer>
  );
};

export default AddTaskForm;
