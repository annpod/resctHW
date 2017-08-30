import React, { Component } from 'react';
//import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router/Router';
import './App.css';

const Home = props => <div>Home</div>

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
		token: window.localStorage.getItem('token') ? true : false,
		user: window.localStorage.getItem('user') ? window.localStorage.getItem('user') : ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      token: true,
		user: window.localStorage.getItem('user')
    });
  }
  logout() {
    this.setState({
		token: false,
		user: ''
    });
	  window.localStorage.clear();
  }

  _onShowTeamLayer(targetValue) {
    this.setState({showLayer: true});
    this.setState({selectedItem: targetValue});
    //console.log('targetValue',targetValue);
  }

  render() {
    return (
      <div className="App">
        <Header isLogin={this.state.token} userName={this.state.user}/>
        <div className='container'>
          <Router login={this.login} logout={this.logout}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
