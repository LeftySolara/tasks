import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../Context';

const StyledAddTaskContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const StyledAddTaskButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid ${(props) => props.theme.colors.background};
`;

const StyledAddTaskForm = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  width: 100%;
`;

const StyledAddTaskFormInput = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid ${(props) => props.theme.colors.background};
  :focus {
    outline: none;
  }
`;

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
