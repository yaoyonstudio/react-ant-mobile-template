import React, { Component } from 'react';
import Routers from './routers'

export default class App extends Component {
  render() {
    return (
      <Routers {...this.props} />
    );
  }
}
