import styled from 'styled-components';

const foreground = '#3d3d3b';
const background = '#eae7dc';
const backgroundPrimary = '#e98074';

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? backgroundPrimary : background)};
  color: ${(props) => (props.primary ? background : foreground)};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 2px solid
    ${(props) => (props.primary ? backgroundPrimary : background)};
  border-radius: 6px;
`;

export default StyledButton;
