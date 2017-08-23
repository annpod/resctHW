import React, { Component } from 'react';
import './auth.css';

class SignIn extends Component{
	constructor(){
		super();
		this.state={
			name: '',
			password: ''
		}
		this.updateInput = this.updateInput.bind(this);
	}

	updateInput(e) {
		if (e.target.name === 'name'){
			this.setState({name: e.target.value});
		}
		if (e.target.name === 'password'){
			this.setState({password: e.target.value});
		}
	}
	render(){
		return (
			<div>
				Sign Up
				<form>
					<div className="controlGroup">
						<label htmlFor="email">Name</label>
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
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default SignIn;