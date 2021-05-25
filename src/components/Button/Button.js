import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

/**
 * Generic button that can be assigned text and an onClick event handler.
 *
 * @param {Object} props Props to pass to the component.
 * @param {string} props.text The text to display on the button.
 * @param {function} props.onClick Callback to execute when the button is pressed.
 * @param {bool} props.primary Whether to use the primary button style.
 */
const Button = (props) => {
  const { text, onClick, primary } = props;

  return (
    <StyledButton type="button" onClick={onClick} primary={primary}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
