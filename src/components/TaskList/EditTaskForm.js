import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../Context';
import { StyledAddTaskForm, StyledAddTaskFormInput } from './style';

/**
 * Form for updating a task's information.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.task An object containing a task's information.
 * @param {function} props.onBlur Callback to execute when the form loses focus.
 * @param {function} props.onUnmount Callback that unmounts the form.
 */
const EditTaskForm = (props) => {
  const { task, onBlur, onUnmount } = props;
  // eslint-disable-next-line no-unused-vars
  const [tasks, dispatchTasks] = useContext(TaskContext);
  const [text, setText] = useState(task.title);
  const textInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchTasks({ type: 'EDIT_TASK', payload: { id: task.id, title: text } });
    setText('');
    onUnmount();
  };

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <StyledAddTaskForm onSubmit={handleSubmit}>
      <StyledAddTaskFormInput
        type="text"
        value={text}
        placeholder="Title"
        onChange={(e) => setText(e.target.value)}
        onBlur={onBlur}
        ref={textInput}
        required
      />
    </StyledAddTaskForm>
  );
};

EditTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  onBlur: PropTypes.func,
  onUnmount: PropTypes.func.isRequired,
};

EditTaskForm.defaultProps = {
  onBlur: () => {},
};

export default EditTaskForm;
