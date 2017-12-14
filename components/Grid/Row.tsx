import React, { Children, Component, ReactElement } from 'react';
import './Row.less';

interface Props {
}

interface State {

}

const prefixCls = 'jtalk-row';
export default class Row extends Component<Props, State> {
  static defaultProps = {

  };

  state = {

  };

  render() {
    const {children, ...others} = this.props;
    const cols = Children.map(children, (col: ReactElement<HTMLDivElement>) => {
      if (!col) {
        return null;
      }
      return col;
    });
    return (
      <div
        {...others}
        className={prefixCls}
      >
        {cols}
      </div>
    );
  }
}
