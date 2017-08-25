import React, { Component } from 'react';
import './auth.css';

class SignIn extends Component{
	constructor(props){
		super(props);
		this.state={
			email: '',
			name: '',
			password: ''
		}
		this.updateInput = this.updateInput.bind(this);
		this.isEmail = this.isEmail.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	updateInput(e) {
		if (e.target.name === 'name'){
			this.setState({name: e.target.value});
		}
		if (e.target.name === 'password'){
			this.setState({password: e.target.value});
		}
		if (e.target.email === 'email'){
			this.setState({email: e.target.value});
		}
	}
	_onSubmit(e) {
		e.preventDefault();
		console.log('submit',this.isEmail(this.state.email));
	}
	isEmail(emailVal) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(emailVal);
	}

	render(){

		return (
			<div>
				Sign Up
				<form>
					<div className="controlGroup">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" name="email"  onChange={this.updateInput} />
					</div>
					<div className="controlGroup">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" onChange={this.updateInput} />
					</div>
					<div className="controlGroup">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input type="password" id="confirmPassword" name="confirmPassword" onChange={this.updateInput} />
					</div>
					<div className="controlGroup">
						<label htmlFor="user">User</label>
						<input type="password" id="user" name="user" onChange={this.updateInput} />
					</div>
					<button type="submit" onSubmit={this._onSubmit}>Submit</button>
				</form>
			</div>
		)
	}
}
export default SignIn;