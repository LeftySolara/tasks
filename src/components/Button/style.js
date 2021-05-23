import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? '#ffd6ba' : '#faf9f9')};
  color: ${(props) => (props.primary ? '#555B6Ef' : '#555B6E')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 2px solid #fec5bb;
  border-radius: 3px;
`;

export default StyledButton;
