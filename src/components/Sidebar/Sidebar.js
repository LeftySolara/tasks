import React from 'react';
import SidebarList from './SidebarList';
import StyledSidebar from './style';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h2>Projects</h2>
      <SidebarList />
    </StyledSidebar>
  );
};

export default Sidebar;
