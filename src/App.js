import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Ellipsis from './ellipsis';
import './App.scss';

export default class App extends Component {
  static ScrollToTop() {
    window.scrollTo(0, 0);
    return null;
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route component={App.ScrollToTop} />
          <Route exact path="/" component={Home} />
          <Route path="/ellipsis" component={Ellipsis} />
        </div>
      </Router>
    );
  }
}
