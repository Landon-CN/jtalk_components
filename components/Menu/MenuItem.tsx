import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as ReactTypes from 'react';

const prefix = 'jtalk-menu-item';

export interface MenuItemProps {
  id?: ReactTypes.Key;
  active?: boolean;
}

export default class MenuItem extends Component<MenuItemProps, {}> {

  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  };

  static contextTypes = {
    menuItemClick: PropTypes.func
  };

  itemClick = () => {
    this.context.menuItemClick(this.props.id);
  }

  render() {
    const { children, active } = this.props;
    const cls = classnames(prefix, {
      [`${prefix}-active`]: active
    });
    return (
      <li
        className={cls}
        onClick={this.itemClick}
      >
        {children}
      </li>
    );
  }
}
