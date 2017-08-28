import React, { Component } from 'react';
import './auth.css';

class SignIn extends Component{
	constructor(props){
		super(props);
		this.state={
			email: '',
			emailError: false,
			name: '',
			password: '',
			comfirmPassword: '',
			comfirmPasswordError: false,
		}
		this.updateInput = this.updateInput.bind(this);
		this.isEmail = this.isEmail.bind(this);
		this.isConfirm = this.isConfirm.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	updateInput(e) {
		if (e.target.name === 'name'){
			this.setState({name: e.target.value});
		}
		if (e.target.name === 'password'){
			this.setState({password: e.target.value});
		}
		if (e.target.name === 'confirmPassword'){
			this.setState({comfirmPassword: e.target.value});
		}
		if (e.target.name === 'email'){
			this.setState({email: e.target.value});
		}
	}
	_onSubmit(e) {
		e.preventDefault();
		let email = false;
		let confirmPass = false;
		if (this.state.email.trim()){
			email = this.isEmail(this.state.email);
			this.setState({emailError: false});
		}
		if (this.state.password.trim() && this.state.comfirmPassword.trim()){
			confirmPass = this.isConfirm(this.state.password,this.state.comfirmPassword);
			this.setState({comfirmPasswordError: false});
		}
		if (email && confirmPass) {
			console.log('success');
			
		} else {
			if (!email) {
				this.setState({emailError: true});
			}
			if (!confirmPass) {
				this.setState({comfirmPasswordError: true});
			}
		}

	}
	isEmail(emailVal) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(emailVal);
	}
	isConfirm(pass,comfirmPass) {
		return pass === comfirmPass ? true : false;
	}

	render(){

		return (
			<div  className="formWrappwer">
				Sign Up
				<form onSubmit={this._onSubmit}>
					<div className="controlGroup">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" name="email"  onChange={this.updateInput} className={this.state.emailError === true ? 'error' : ''}/>
					</div>
					<div className="controlGroup">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" className={this.state.comfirmPasswordError === true ? 'error' : ''}  onChange={this.updateInput} />
					</div>
					<div className="controlGroup">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input type="password" id="confirmPassword" name="confirmPassword" className={this.state.comfirmPasswordError === true ? 'error' : ''} onChange={this.updateInput} />
					</div>
					<div className="controlGroup">
						<label htmlFor="user">User</label>
						<input type="password" id="user" name="user"  onChange={this.updateInput} />
					</div>
					<button type="submit" >Submit</button>
				</form>
			</div>
		)
	}
}
export default SignIn;