import React, { Component } from 'react';
import { connect } from 'react-redux';

import Linkify from 'react-linkify';

const mapReduxStateToProps = reduxState => ({
  reduxState
});


class ProjectList extends Component {

  componentDidMount() {
      this.getProjects();
    }//end component did mount

  getProjects() {
      this.props.dispatch({ type: 'FETCH_PROJECT' })
    }
  
  render() {
      console.log(this.props.reduxState.projects);
      
      
      return (
        <div>
           {this.props.reduxState.projects.map((project) => (
            <div>
              <h3>{project.name}</h3>
              <br/>
              <p>{project.tag_id}</p>
              <p>{project.description} </p>
                <Linkify> GitHub: {project.github}</Linkify>
                <Linkify> Website: {project.website}</Linkify>
              <p>{project.thumbnail}</p>
              <br/>
              <p>{project.date_completed}</p>
            </div>
            ))}
        </div>
      );
    }
  }
  
  
  export default connect(mapReduxStateToProps)(ProjectList);
  