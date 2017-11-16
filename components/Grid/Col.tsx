import React from 'react';
import classnames from 'classnames';
import './Col.less';

interface Props {
  unit?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  className?: string;
  offset?: number;
}

const prefixCls = 'jtalk-col';
export default class Button extends React.Component<Props, any> {
  static defaultProps = {};

  render() {
    const props = this.props;
    const {unit, xs, sm, md, lg, children, className, offset, ...others} = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg'].forEach((item) => {
      if (props[item]) {
        sizeClassObj = {
          ...sizeClassObj,
          [`${prefixCls}-${item}-${props[item]}`]: !!props[item],
          [`${prefixCls}-${item}-offset-${offset}`]: !!offset
        };
      }
    });
    const classNames = classnames(
      prefixCls,
      {
        [`${prefixCls}-${unit}`]: !!unit,
        [`${prefixCls}-offset-${offset}`]: !!offset,
      },
      sizeClassObj,
      className);
    return (
      <div
        {...others}
        className={classNames}
      >
        {children}
      </div>
    );
  }
}
