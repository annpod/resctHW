import React, { Component } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
	      <Header isLogin={true}/>
	      <Main />
		  <Footer />
	  </div>
    );
  }
}

export default App;
