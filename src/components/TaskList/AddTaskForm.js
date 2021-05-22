import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

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
  const [text, setText] = useState();

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

  const button = <Button text="Add Task" onClick={toggleEditing} />;

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Title"
        onChange={(e) => setText(e.target.value)}
        onBlur={toggleEditing}
        required
      />
    </form>
  );

  return <div>{editing ? form : button}</div>;
};

AddTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTaskForm;
