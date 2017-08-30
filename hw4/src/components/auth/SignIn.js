import React, { Component } from 'react';
import './auth.css';
import Api from "../../services/api";
import { Redirect } from 'react-router-dom'


class SignIn extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			password: '',
			data: null,
			redirect: false,
			error: ''
		}
		this.updateInput = this.updateInput.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}
	updateInput(e) {
		if (e.target.name === 'name'){
			this.setState({name: e.target.value});
		}
		if (e.target.name === 'password'){
			this.setState({password: e.target.value});
		}
	}

	_onSubmit(e) {
		e.preventDefault();
		const userdata = { "user":this.state.name, "password": this.state.password };
		const data = Api.logIn(userdata);
		data.then(json => {
				this.setState({data: json});
				if(this.state.data.status === 'success') {
					window.localStorage.setItem('token', json.message.token);
					window.localStorage.setItem('user', json.message.user.name);
					this.setState({error: ''});
					this.setState({redirect: true});
					this.props.login();
				} else {
					this.setState({error: this.state.data.message});
					console.log('error',this.state.error);
				}
			}
		);
	}

	render(){
		let ErorrMessage;
		if (this.state.redirect) {
			return <Redirect to={'/User'}/>
		}

	return (
		<div className="formWrappwer">
			<h3>Log In</h3>
			<form name="signIn" onSubmit={this._onSubmit}>
				<div className="controlGroup">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name"  onChange={this.updateInput} />
				</div>
				<div className="controlGroup">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" onChange={this.updateInput} />
				</div>

				<button type="submit">Log in</button>
			</form>
			{this.state.error &&
				<div className='errorMessage'>{this.state.error}</div>
			}
		</div>
	)
}
}
export default SignIn;