import React, { Component } from 'react';
import { connect } from 'react-redux';



class Admin extends Component {

  state = {
    newProject: {
        id: 4,
        name: '',
        description: '',
        date: '',
        gitHub: '',
        website: '',
        tag_id: '',
        thumbnail: ''
    }
}

componentDidMount() {
    console.log('admin loaded');
    this.getProjects();
}//end component did mount


  
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
  