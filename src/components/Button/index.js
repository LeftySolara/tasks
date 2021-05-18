import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

/**
 * Simple button with assignable text and onClick handler.
 *
 * @param {Object} props Props to pass to the component.
 * @param {string} props.text The text to display on the button.
 * @param {bool} props.primary Whether to use the "primary" style on the button.
 * @param {function} props.onClick Callback function to execute when the button is pressed.
 */
const Button = (props) => {
  const { text, primary, onClick } = props;

  return (
    <StyledButton type="button" onClick={onClick} primary={primary}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: () => {},
};

export default Button;
