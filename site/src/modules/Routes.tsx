import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import list from './MenusList';

export default class Routes extends React.Component {

  renderRouteList = () => {
    return list.map((data, idx) => {
      return (
        <Route key={idx} exact={true} path={data.link} component={data.component} />
      );
    });
  }

  render() {
    return (
      <Switch>
        {this.renderRouteList()}
        <Route key="redirect" render={() => <Redirect to={list[0].link} />} />
      </Switch>
    );
  }
}
