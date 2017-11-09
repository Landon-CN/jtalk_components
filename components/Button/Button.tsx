import React, { Component } from 'react';
import classnames from 'classnames';
import './Button.less';

type ButtonSize = 'default' | 'small' | 'large';

interface Props {
  size?: ButtonSize;
  className?: 'string';
  loading?: boolean | { delay: number };
  type?: string;
  onClick?: Function;
}

interface State {
  click: Boolean;
}

const prefixCls = 'jtalk-btn';
export default class Button extends Component<Props, State> {

  state = {
    click: false
  };

  btnClick = () => {
    return 1;
  }

  render() {
    const { size } = this.props;

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
      [`${prefixCls}-${sizeCls}`]: !!sizeCls
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
