import React from 'react';
import './App.less';
import logo from './logo.svg';
import { Page } from './modules';
import { Provider } from 'react-redux';
import { Store } from 'redux';

interface Props {
  store: Store<any>;
}

class App extends React.Component<Props, {}> {
  render() {
    const store = this.props.store;
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React by scliuyang11</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Page />
        </div>
      </Provider>
    );
  }
}

export default App;
