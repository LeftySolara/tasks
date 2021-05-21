import React, { useState } from 'react';
import Button from '../Button';

const AddTaskForm = (props) => {
  const { onSubmit } = props;

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState();

  const toggleEditing = () => {
    setEditing(!editing);
  };

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

export default AddTaskForm;
