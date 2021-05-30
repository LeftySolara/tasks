import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${(props) =>
    props.primary ? props.theme.colors.accent : props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 1em;
  padding: 0.25em, 1em;
  border: 2px solid
    ${(props) =>
      props.primary
        ? props.theme.colors.accent
        : props.theme.colors.background};
  border-radius: 6px;
`;

/**
 * Generic button that can be assigned text and an onClick event handler.
 *
 * @param {Object} props Props to pass to the component.
 * @param {string} props.text The text to display on the button.
 * @param {string} props.button The button type.
 * @param {function} props.onClick Callback to execute when the button is pressed.
 * @param {bool} props.disabled Whether the button is disabled.
 * @param {bool} props.primary Whether to use the primary button style.
 */
const Button = (props) => {
  const { text, type, onClick, disabled, primary } = props;

  return disabled ? (
    <StyledButton type={type} primary={primary} disabled>
      {text}
    </StyledButton>
  ) : (
    <StyledButton type={type} onClick={onClick} primary={primary}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  primary: false,
  disabled: undefined,
};

export default Button;
