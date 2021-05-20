import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

/**
 * Simple text input for adding new tasks.
 *
 * @param {Object} props Props to pass to the component.
 * @param {function} props.onSubmit Callback function to execute on form submission.
 * @param {function} props.onBlur Callback to execute when the form loses focus.
 */
const AddTaskForm = (props) => {
  const { onSubmit, onBlur } = props;
  const [text, setText] = useState();
  const textInput = useRef(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  // Focus the input field on render.
  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={text}
        onChange={handleChange}
        onBlur={onBlur}
        ref={textInput}
        required
      />
    </form>
  );
};

AddTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

/**
 * Container for the task editing form and buttons that triger its rendering.
 *
 * @param {Object} props Props to pass to the component.
 * @param {function} onSubmit Callback to execute when the form is submitted.
 */
const TaskFormContainer = (props) => {
  const { onSubmit } = props;
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => setEditing(!editing);

  const handleSubmit = (text) => {
    onSubmit(text);
    toggleEditing();
  };

  return (
    // prettier-ignore
    <>
      {editing
        ? <AddTaskForm onSubmit={handleSubmit} onBlur={toggleEditing} />
        : <Button text="Add Task" onClick={toggleEditing} primary/>
      }
    </>
  );
};

export default TaskFormContainer;
