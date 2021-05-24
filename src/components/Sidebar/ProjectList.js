import React from 'react';
import styled from 'styled-components';

const StyledSidebarList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

/**
 * A list of items to display in the sidebar.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Array} props.children List of items to display in the list.
 */
const SidebarList = (props) => {
  const { children } = props;

  return (
    <StyledSidebarList>
      {children}
      <li>Example Project 1</li>
      <li>Example Project 2</li>
    </StyledSidebarList>
  );
};

export default SidebarList;
