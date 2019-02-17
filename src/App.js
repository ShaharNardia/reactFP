import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Default from "./Default";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainreducer from './mainreducer.js';



var appStore = createStore(mainreducer);
class App extends Component {



  render() {
    return (
      <Provider store={appStore}>
      <Router>
        <Switch>
        <Redirect exact from="/" to="/index" />
        <Route path='/index' component={Default} />       
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
