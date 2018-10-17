import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Test from '../pages/Test';

export default class Routers extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/test" component={Test}/>
        </Switch>
      </div>
    );
  }
}
