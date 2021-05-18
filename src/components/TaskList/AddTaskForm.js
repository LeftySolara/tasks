import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Simple text input for adding new tasks.
 *
 * @param {Object} props Props to pass to the component.
 * @param {function} props.onSubmit Callback function to execute on form submission.
 */
const AddTaskForm = (props) => {
  const { onSubmit } = props;
  const [text, setText] = useState();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={text}
        onChange={handleChange}
        required
      />
    </form>
  );
};

AddTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTaskForm;
