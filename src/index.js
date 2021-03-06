import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

// Create the rootSaga generator function
function* rootSaga() {
    //connecting axios get
    yield takeEvery('FETCH_PROJECT', getProject);
    //connecting axios post
    yield takeEvery('ADD_PROJECT', postProject);
    //connecting axios delete
    yield takeEvery('DELETE_PROJECT', deleteProject);
}//end root saga

function* deleteProject (action){
    try{
        yield axios.delete(`api/project/${action.payload}`)
        yield put({type: 'FETCH_PROJECT'})
    } catch(error){
    console.log('error in DELETE request ', error)
        }
    }

function* getProject(action) {
    console.log('hit first saga Get project');
    try {
      const fetchProject = yield axios.get('/api/project');
      yield put({type: 'SET_PROJECTS', payload: fetchProject.data})
    }
    catch (err){
      console.log('in get project', err)
    }
}// end get project

//post new project
function* postProject (action){
    try {
      yield axios.post('/api/project', action.payload);
      yield put({ type: 'FETCH_PROJECT' });
    } catch (error) {
      console.log('Error making POST request');
      alert('there was a problem');
   }
}//end post project

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
