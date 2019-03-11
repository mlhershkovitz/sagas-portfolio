import React, { Component } from 'react';
import { connect } from 'react-redux';



class ProjectList extends Component {

    componentDidMount() {
      this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }
  
    render() {
      
      return (
        <div>
        
        </div>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ProjectList);
  