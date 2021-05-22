import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

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
