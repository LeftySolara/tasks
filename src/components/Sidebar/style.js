import styled from 'styled-components';

const StyledSidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  background-color: #e98074;
  width: 250px;
  height: 100vh;
`;

const StyledSidebarList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export { StyledSidebar as default, StyledSidebarList };
