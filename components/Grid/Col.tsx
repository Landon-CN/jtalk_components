import React from 'react';
import classnames from 'classnames';
import './Col.less';

export interface ColSize {
  unit?: number;
  offset?: number;
}

interface Props {
  unit?: number;
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  className?: string;
  offset?: number;
}

const prefixCls = 'jtalk-col';
export default class Col extends React.Component<Props, any> {

  render() {
    const props = this.props;
    const {unit, children, className, offset, ...others} = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg'].forEach(item => {
      const current = props[item];
      let sizeProps: ColSize = {};
      if (typeof current === 'number') {
        sizeProps.unit = current;
      } else if (typeof current === 'object') {
        sizeProps = current || {};
      }

      sizeClassObj = {
        ...sizeClassObj,
        [`${prefixCls}-${item}-${sizeProps.unit}`]: sizeProps.unit || sizeProps.unit === 0,
        [`${prefixCls}-${item}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0
      };

      delete others[item];
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
