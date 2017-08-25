import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../Router/Router';


class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: false
		};
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login() {
		this.setState({
			token: true
		});
	}
	logout() {
		this.setState({
			token: false
		});
	}

	_onShowTeamLayer(targetValue) {
		this.setState({showLayer: true});
		this.setState({selectedItem: targetValue});
		//console.log('targetValue',targetValue);
	}

	render() {
		return (
			<div className="main">
				<Header isLogin={this.state.token}/>
				<Router login={this.login} logout={this.logout}/>
				<Footer/>
			</div>
		)
	}
}
export default Main;