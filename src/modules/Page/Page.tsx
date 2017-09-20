import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface state {
    count: number
}

export interface props {
    store: any,
    actions: object
}

class App extends React.Component<props, state> {
    state = {
        count: 1
    }

    btnClick = (event: MouseEvent<HTMLButtonElement>) => {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.btnClick}>增加</button>
                <h1>点击次数{this.state.count}</h1>
            </div>
        );
    }
}

export default App;
