import React, { Component } from 'react';
import classnames from 'classnames';
import './Button.less';
import * as ReactTypes from 'react';

type ButtonSize = 'default' | 'small' | 'large';
type BtnType = 'primary' | 'danger';

interface Props {
  size?: ButtonSize;
  className?: 'string';
  loading?: boolean | { delay: number };
  type?: BtnType;
  onClick?: Function;
}

interface State {
  click: Boolean;
}

const prefixCls = 'jtalk-btn';
export default class Button extends Component<Props, State> {
  static defaultProps = {

  };

  state = {
    click: false
  };

  btnClick = (event: ReactTypes.MouseEvent<HTMLButtonElement>) => {
    if (!this.state.click) {
      this.setState({
        click: true
      });

      setTimeout(() => {
        this.setState({
          click: false
        });
      }, 300);
    }

    const onClick = this.props.onClick;
    if (onClick) {
      onClick(event);
    }

  }

  render() {
    const { size, type } = this.props;

    let sizeCls = '';
    switch (size) {
      case 'small':
        sizeCls = 'sm';
        break;
      case 'large':
        sizeCls = 'lg';
        break;
      default:
        break;
    }

    const classes = classnames(prefixCls, {
      [`${prefixCls}-${sizeCls}`]: !!sizeCls,
      [`${prefixCls}-clicked`]: this.state.click,
      [`${prefixCls}-${type}`]: !!type
    });

    const chilren = this.props.children;
    return (
      <button
        onClick={this.btnClick}
        className={classes}
      >
        {chilren}
      </button>
    );
  }
}
