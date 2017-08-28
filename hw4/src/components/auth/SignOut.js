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
			<div className="formWrappwer">
				Are you sure?
				<button type="submit" onClick={this._onClick} >Sign Out</button>
			</div>
		)
	}
}
export default SignOut;