import React from 'react';

const SidebarItem = (props) => {
  const { className, children } = props;

  return <li className={className}>{children}</li>;
};

export default SidebarItem;
