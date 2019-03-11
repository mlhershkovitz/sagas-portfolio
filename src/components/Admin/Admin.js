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

getProjects() {
  this.props.dispatch({ type: 'GET_PROJECT' })
}


  
render() {  
  return (
      <div>
        <input placeholder="name"
        type="text"
        value={this.state.newProject.name}
        onChange={this.handleChange('name')}/>
        <input placeholder="description"
        type="text" 
        value={this.state.newProject.description}
        onChange={this.handleChange('date')}/>
        <input placeholder="gitHub link" 
        type="text" 
        value={this.state.newProject.gitHub}
        onChange={this.handleChange('gitHub')}/>
        <input placeholder="website link"
        type="text"
        value={this.state.newProject.website}
        onChange={this.handleChange('website')}/>
        <input placeholder="date" type="date"
        value={this.state.newProject.date}
        onChange={this.handleChange('date')}/>
        <input placeholder="thumbnail" type="imgUrl"
        value={this.state.newProject.thumbnail}
        onChange={this.handleChange('thumbnail')}/>

        
        
      </div>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Admin);
  