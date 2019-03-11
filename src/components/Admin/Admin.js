import React, { Component } from 'react';
import { connect } from 'react-redux';



class Admin extends Component {

  state = {
    newProject: {
        name: '',
        description: '',
        gitHub: '',
        website: '',
        date: '',
        tag_id: '',
        thumbnail: ''
    }
}

handleChange = (key) => (event) => {

  this.setState({
      newProject: {
          ...this.state.newProject,
          [key]: event.target.value,
      }
  });
}

componentDidMount() {
    console.log('admin loaded');
    this.getProjects();
}//end component did mount

getProjects() {
  this.props.dispatch({ type: 'FETCH_PROJECT' })
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
    this.setState({
        newProject: {
          name: '',
          description: '',
          gitHub: '',
          website: '',
          date: '',
          tag_id: '',
          thumbnail: ''
      }
  });
}

handleClick= (value) => (event) => {
  console.log(event.target.value)
  this.props.dispatch({type: 'DELETE_PROJECT', payload: event.target.value})
}

render() {
  console.log(this.props.reduxState.projects);
    
  return (
      <div>
        <form onSubmit = {this.handleSubmit}>

        <input placeholder="name"
        type="text"
        value={this.state.newProject.name}
        onChange={this.handleChange('name')}/>
        <input placeholder="description"
        type="text" 
        value={this.state.newProject.description}
        onChange={this.handleChange('description')}/>
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
        <input placeholder="tag id" type="number"
        value={this.state.newProject.tag_id}
        onChange={this.handleChange('tag_id')}/>

        <button type='submit' >Add Project</button>
        </form>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          
          <tbody>
          {this.props.reduxState.projects.map((projects) => (
            <tr>
              <td>{projects.name}</td>
              <td>{projects.description}</td>
              <td><button value={projects.id} onClick={this.handleClick(this.value)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Admin);
  