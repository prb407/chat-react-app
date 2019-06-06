import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Login from "./Components/login/Login.jsx";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
