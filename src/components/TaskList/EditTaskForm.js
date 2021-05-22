import React, { useState } from 'react';

const EditTaskForm = (props) => {
  const { task, onSubmit, onBlur, onUnmount } = props;
  const [text, setText] = useState(task.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task.id, text);
    setText('');
    onUnmount();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Title"
        onChange={(e) => setText(e.target.value)}
        onBlur={onBlur}
        required
      />
    </form>
  );
};

export default EditTaskForm;
