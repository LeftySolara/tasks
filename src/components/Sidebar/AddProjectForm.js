import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProjectContext, withFirebase } from '../Context';

const StyledAddProjectContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-top: 10px;
  padding-left: 25px;
`;

const StyledAddProjectButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%
  margin: 0px;
  padding: 0px;
  border: 0px solid ${(props) => props.theme.colors.background};
`;

const StyledAddProjectForm = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%;
`;

const StyledAddProjectFormInput = styled.input`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.foreground};
  font-size: ${(props) => props.theme.fontSizes.small};
  width: 100%
  margin: 1em;
  padding: 0.25em, 1em;
  border: 0px solid ${(props) => props.theme.colors.background};
  :focus {
    outline: none;
  }
`;

const AddProjectForm = (props) => {
  const { firebase } = props;
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
    dispatchProjects({
      type: 'ADD_PROJECT',
      payload: { title: text },
      firebase,
    });
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

export default withFirebase(AddProjectForm);
