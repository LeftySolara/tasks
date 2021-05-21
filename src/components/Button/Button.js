import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic button that can be assigned text and an onClick event handler.
 *
 * @param {Object} props Props to pass to the component.
 * @param {string} props.text The text to display on the button.
 * @param {function} props.onClick Callback to execute when the button is pressed.
 */
const Button = (props) => {
  const { text, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
