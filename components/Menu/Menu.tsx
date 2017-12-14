import React, { Component } from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import SubMenu, { SubMenuProps } from './SubMenu';
import classnames from 'classnames';
import * as ReactTypes from 'react';
import PropTypes from 'prop-types';
import './Menu.less';

interface MenuProps {
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  defaultOpenKeys?: string[];
  openKeys?: string[];
  onClick?: Function;
  onOpenChange?: Function;
  className?: string;
}
interface MenuState {
  openKeys: string[];
  selectedKeys: string[];
}

const prefix = 'jtalk-menu';

export default class Menu extends Component<MenuProps, MenuState> {
  static Item: typeof MenuItem;
  static SubMenu: typeof SubMenu;

  static childContextTypes = {
    menuItemClick: PropTypes.func,
    subMenuClick: PropTypes.func,
    renderMenuItem: PropTypes.func,
    openChange: PropTypes.func,
    openKeys: PropTypes.arrayOf(PropTypes.string),
    selectedKeys: PropTypes.arrayOf(PropTypes.string),
  };
  initState = () => {
    const { defaultSelectedKeys, selectedKeys, defaultOpenKeys, openKeys } = this.props;

    return {
      openKeys: openKeys || defaultOpenKeys || [],
      selectedKeys: selectedKeys || defaultSelectedKeys || []
    };
  }

  state = this.initState();

  componentWillReceiveProps(nextProps: MenuProps) {
    if (nextProps.openKeys) {
      this.setState({
        openKeys: nextProps.openKeys
      });
    }

    if (nextProps.selectedKeys) {
      this.setState({
        selectedKeys: nextProps.selectedKeys
      });
    }
  }

  getChildContext = () => {
    return {
      menuItemClick: (key: string) => {
        if (this.props.onClick) {
          this.props.onClick(key);
        }

      },
      renderMenuItem: this.renderMenuItem,
      subMenuClick: (obj: any) => {
        this.setState({
          openKeys: obj.subMenu,
        });
        if (this.props.onClick) {
          this.props.onClick(obj.menuItem);
        }
      },
      openChange: (openKey: string) => {
        this.setState((prevState, props) => {
          let openKeys = prevState.openKeys.concat();
          if (openKeys.includes(openKey)) {
            for (let i = 0; i < openKeys.length; i++) {
              if (openKeys[i] === openKey) {
                openKeys.splice(i, 1);
                break;
              }
            }
          } else {
            openKeys.push(openKey);
          }

          if (this.props.onOpenChange) {
            this.props.onOpenChange(openKeys);
          }
          return {
            openKeys
          };

        });

      },
      openKeys: this.state.openKeys,
      selectedKeys: this.state.selectedKeys,
    };
  }

  getChildKey = (child: ReactTypes.ReactElement<any>, type: string | null, idx: number) => {

    if (child.key) {
      return child.key + '';
    }
    const keyPrefix = type ? type + '_' : undefined || '';
    return `${keyPrefix}item_${idx}`;
  }

  renderMenuItem = (child: ReactTypes.ReactChild, idx: number, props: any) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (MenuItem === child.type) {
      child = child as React.ReactElement<MenuItemProps>;
      const id = this.getChildKey(child, props.id, idx);
      const newProps: MenuItemProps = {
        ...child.props,
        id,
        active: this.state.selectedKeys.includes(id)
      };

      return React.cloneElement(child, newProps);
    }

    if (SubMenu === child.type) {
      child = child as React.ReactElement<SubMenuProps>;

      const newProps: SubMenuProps = {
        ...child.props,
        id: this.getChildKey(child, props.id, idx),
      };

      return React.cloneElement(child, newProps);

    }

    return child;

  }

  render() {
    const { children, className } = this.props;
    const cls = classnames(prefix, className);

    return (
      <ul className={cls}>
        {React.Children.map(children, (child, idx) => this.renderMenuItem(child, idx, this.props))}
      </ul>
    );
  }
}
