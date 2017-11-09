import React from 'react';
import './App.less';
import Menus from './modules/Menus';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './modules/Routes';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router basename="/app">
        <div className="App">
          <div className="left">
            <Menus />
          </div>
          <div className="right">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
