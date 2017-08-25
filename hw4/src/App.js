import React, { Component } from 'react';
import Main from './components/Main/Main';
import Router from './components/Router/Router';
import './App.css';

const Home = props => <div>Home</div>

class Counter extends Component {
  render() {
    	return (<div>Counter</div>)
	}
}
class NotFound extends Component {
  render() {
    	return (<div>NotFound</div>)
	}
}

class App extends Component {

  render() {
    return (
      <div className="App">
	     <Main />
	  </div>
    );
  }
}

export default App;
