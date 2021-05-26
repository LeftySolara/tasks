import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProjectContext } from '../Context';

const StyledAddProjectContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const StyledAddProjectButton = styled.button`
  background-color: #fcfcfa;
  color: #3d3d3b;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid #fcfcfa;
`;

const StyledAddProjectForm = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1em;
  border-bottom: 2px solid #dfdfde;
  width: 100%;
`;

const StyledAddProjectFormInput = styled.input`
  background-color: #fcfcfa;
  color: #3d3d3b;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid #fcfcfa;
  :focus {
    outline: none;
  }
`;

const AddProjectForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, dispatchProjects] = useContext(ProjectContext);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');
  const textInput = useRef(null);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchProjects({ type: 'ADD_PROJECT', payload: { title: text } });
    setText('');
    toggleEditing();
  };

  const button = (
    <StyledAddProjectButton type="button" onClick={toggleEditing}>
      Add Project
    </StyledAddProjectButton>
  );

  const form = (
    <StyledAddProjectForm onSubmit={handleSubmit}>
      <StyledAddProjectFormInput
        type="text"
        value={text}
        placeholder="Project Title"
        onChange={(e) => setText(e.target.value)}
        onBlur={toggleEditing}
        ref={textInput}
        required
      />
    </StyledAddProjectForm>
  );

  // Focus the form on render.
  useEffect(() => {
    if (editing) {
      textInput.current.focus();
    }
  }, [editing]);

  return (
    <StyledAddProjectContainer>
      {editing ? form : button}
    </StyledAddProjectContainer>
  );
};

export default AddProjectForm;
