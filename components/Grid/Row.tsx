import React, { Children, Component, ReactElement } from 'react';
import './Row.less';

interface Props {
}

interface State {

}

export default class Button extends Component<Props, State> {
  static defaultProps = {

  };

  state = {

  };

  render() {
    const {children} = this.props;
    const cols = Children.map(children, (col: ReactElement<HTMLDivElement>) => {
      if (!col) {
        return null;
      }
      return col;
    });
    return (
      <div
      >
        {cols}
      </div>
    );
  }
}
