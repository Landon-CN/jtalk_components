// import * as ReactTypes from 'react';
// import React from 'react';
// import MenuItem, { MenuItemProps } from './MenuItem';
// import SubMenu, { SubMenuProps } from './SubMenu';

// export const renderMenuItem = (child: ReactTypes.ReactChild, idx: number) => {
//   if (!React.isValidElement(child)) {
//     return child;
//   }

//   if (MenuItem === child.type) {
//     child = child as React.ReactElement<MenuItemProps>;
//     const id = child.key || child.props.id || 'menuItem_' + indexKey++;
//     const key = id + '';
//     const newProps: MenuItemProps = {
//       ...child.props,
//       id: key,
//       active: this.state.selectedKeys.includes(key)
//     };

//     return React.cloneElement(child, newProps);
//   }

//   if (SubMenu === child.type) {
//     child = child as React.ReactElement<SubMenuProps>;
//     // const id = child.key || child.props.id || 'subMenu_' + indexKey++;
//     // const key = id + '';
//     console.log(child);

//     const newProps: SubMenuProps = {
//       ...child.props,
//       id: this.getChildKey(child, child.props.id, idx),
//     };

//     return React.cloneElement(child, newProps);

//   }

//   return child;
// }
