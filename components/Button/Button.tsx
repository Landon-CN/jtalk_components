import React, { Component } from 'react';

interface Props {
  size?: string;
  className?: 'string';
  loading?: boolean | { delay: number };
  type?: string;
  onClick?: Function;
}

export default class Button extends Component<Props, {}> {
  render() {
    const chilren = this.props.children;
    return (
      <button>{chilren}</button>
    );
  }
}
