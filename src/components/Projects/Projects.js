import React, { Component } from 'react';
import { connect } from 'react-redux';

import Linkify from 'react-linkify';



class ProjectList extends Component {

  componentDidMount() {
      this.getProjects();
    }//end component did mount

  getProjects() {
      this.props.dispatch({ type: 'GET_PROJECT' })
    }
  
    render() {
      
      return (
        <div>
           {this.props.reduxState.projects.map((project) => (
            <div className="projects">
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
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ProjectList);
  