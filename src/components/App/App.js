import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Projects from '../Projects/Projects';
import Admin from '../Admin/Admin';


class App extends Component {
  
  render() {
    return (
    <Router>
      <div className="App">
      <header>
        <h1>Portfolio</h1>
        <p>Madison Hershkovitz</p>
          <ul>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/admin">Admin</Link></li>
          </ul>
        </header>
        <Route exact path="/" component={Projects} />
        <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
