import React from 'react';
import * as Button from './Button';
import classnames from 'classnames';

interface ButtonGroupProps {
  size?: Button.ButtonSize;
}
const prefixCls = 'jtalk-btn-group';
export default class ButtonGroup extends React.Component<ButtonGroupProps, {}> {
  render() {
    const { size, ...others } = this.props;

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
    });

    return (
      <div className={classes} {...others} />
    );
  }
}
