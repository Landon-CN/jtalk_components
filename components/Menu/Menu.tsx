import React, { Component } from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import classnames from 'classnames';
import * as ReactTypes from 'react';
import PropTypes from 'prop-types';
import './Menu.less';

interface MenuProps {
  selectedKeys: ReactTypes.Key;
  onClick: Function;
}
interface MenuState {

}

const prefix = 'jtalk-menu';

export default class Menu extends Component<MenuProps, MenuState> {
  static Item: typeof MenuItem;
  state = {

  };

  static childContextTypes = {
    menuItemClick: PropTypes.func,
    renderMenuItem: PropTypes.func
  };

  getChildContext = () => {
    return {
      menuItemClick: (key: ReactTypes.Key) => {
        this.props.onClick(key);
      },
      renderMenuItem: this.renderMenuItem
    };
  }

  renderMenuItem = (child: ReactTypes.ReactChild) => {
    if (!React.isValidElement(child) || MenuItem !== child.type) {
      return child;
    }

    child = child as React.ReactElement<MenuItemProps>;
    const key = child.key;
    const newProps: MenuItemProps = {
      ...child.props,
      id: key,
      active: this.props.selectedKeys === key
    };

    return React.cloneElement(child, newProps);

  }

  render() {
    const { children } = this.props;
    const cls = classnames(prefix);

    return (
      <ul className={cls}>
        {React.Children.map(children, this.renderMenuItem)}
      </ul>
    );
  }
}
