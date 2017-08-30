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
		this.props.logout();
	}
	render(){
		return (
			<div className="formWrappwer formWrappwer__ac">
				<h5>Are you sure?</h5>
				<button type="submit" onClick={this._onClick} >Log Out</button>
			</div>
		)
	}
}
export default SignOut;