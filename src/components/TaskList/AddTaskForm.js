import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledAddTaskButton,
  StyledAddTaskContainer,
  StyledAddTaskForm,
  StyledAddTaskFormInput,
} from './style';

/**
 * Form for adding new tasks.
 * When the form is inactive, a button that makes it active is rendered.
 *
 * @param {Object} props Props to pass to the component.
 * @param {function} props.onSubmit Callback to execute when the form is submitted.
 */
const AddTaskForm = (props) => {
  const { onSubmit } = props;

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');

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
    onSubmit(text);
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
        required
      />
    </StyledAddTaskForm>
  );

  return (
    <StyledAddTaskContainer>{editing ? form : button}</StyledAddTaskContainer>
  );
};

AddTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTaskForm;
