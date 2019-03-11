import React, { Component } from 'react';
import { connect } from 'react-redux';



class Admin extends Component {

    componentDidMount() {
      console.log('admin loaded');
      
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
  
  export default connect(mapReduxStateToProps)(Admin);
  