import React, { Component } from 'react';
import './auth.css';

class SignOut extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this._onClick = this._onClick.bind(this);
	}

	_onClick() {
		window.localStorage.clear();
		this.props.logout();
	}
	render(){
		return (
			<button type="submit" onClick={this._onClick} >Submit</button>
		)
	}
}
export default SignOut;