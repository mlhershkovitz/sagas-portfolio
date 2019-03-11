import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Projects from '../Projects/Projects';
import Admin from '../Admin/Admin';


class App extends Component {
  // Renders the entire app on the DOM
  state = {
    githubUrl: ''
  }


  
  render() {
    return (
    <Router>
      <div className="App">
          <ul>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/admin">Admin</Link></li>
          </ul>
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
