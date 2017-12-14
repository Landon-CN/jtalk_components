import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as ReactTypes from 'react';
import MenuItem from './MenuItem';

export interface SubMenuProps {
  id?: string;
  title: string | ReactTypes.ReactNode;
}

interface SubMenuState {
  openKeys: string[];
}

const prefix = 'jtalk-menu-sub';

export default class SubMenu extends Component<SubMenuProps, SubMenuState> {

  static contextTypes = {
    renderMenuItem: PropTypes.func,
    openChange: PropTypes.func,
    openKeys: PropTypes.arrayOf(PropTypes.string),
    subMenuClick: PropTypes.func,
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
  };

  constructor(props: SubMenuProps, context: any) {
    super(props, context);

    this.state = {
      openKeys: context.openKeys
    };
  }

  isChildActive = () => {
    const ret = { find: false };
    this.recursiveFindChildActive(this.props.children, ret);
    return ret.find;
  }

  recursiveFindChildActive = (children: ReactTypes.ReactNode, ret: { find: boolean }) => {
    React.Children.forEach(children, (child) => {

      if (ret.find || !React.isValidElement<any>(child)) { return; }

      if (child.type === MenuItem && this.context.selectedKeys.includes(child.key)) {
        ret.find = true;
      } else if (child.props.children) {
        this.recursiveFindChildActive(child.props.children, ret);
      }
    });
  }

  openChange = (childActive: boolean) => {
    const { id } = this.props;
    const { openKeys } = this.context;
    const isOpen = openKeys.includes(id);
    if (isOpen !== childActive) {
      const copyOpenKeys = ([] as string[]).concat(openKeys);
      if (childActive) {
        copyOpenKeys.push(id + '');
        this.context.openChange(copyOpenKeys);
      } else {
        this.context.openChange(copyOpenKeys.filter(item => item !== id));
      }

    }
  }

  mouseenter = () => {
    this.context.openChange(this.props.id);
  }

  mouseleave = () => {
    this.context.openChange(this.props.id);
  }

  render() {
    const { children, title, id } = this.props;
    const { openKeys } = this.context;
    const childActive = this.isChildActive();

    const cls = classnames(prefix, {
      [`${prefix}-active`]: childActive || openKeys.includes(id),
      [`${prefix}-open`]: openKeys.includes(id)
    });

    return (
      <li className={cls} onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
        <div >
          {title}
        </div>
        <ul>
        {React.Children.map(children, (child, idx) => this.context.renderMenuItem(child, idx, this.props))}
        </ul>
      </li>
    );
  }
}
