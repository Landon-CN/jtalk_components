import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions';
import * as types from './types';
import {state} from './reducer';

export interface state {
    count: number
}

export interface props {
    store: typeof state,
    actions: typeof actions,
}

class Page extends React.Component<props, state> {

    btnClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.actions.add(2);
    }

    render() {
        const store = this.props.store;
        return (
            <div className="App">
                <button onClick={this.btnClick}>增加</button>
                <h1>点击次数{store.count}</h1>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        store: store.Page
    }
}, (dispacth) => {
    return {
        actions: bindActionCreators(actions, dispacth)
    }
})(Page);
