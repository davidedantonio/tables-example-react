import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Tables from "./Tables";
import Home from "./Home";

class ApplicationContent extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tables' component={Tables} />
        </Switch>
      </main>
    );
  }
}

export default ApplicationContent;