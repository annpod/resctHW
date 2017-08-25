import React, { Component } from 'react';
import './auth.css';
import {fetchUser} from "../../api/api";


class SignIn extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			password: '',
			data: null

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

		const data = fetchUser(userdata);
		data.then(json => {
				window.localStorage.setItem('token', json.message.token);
				this.setState({data: json});
				this.props.login();
			}
		);
	}

	render(){
		console.log('props',this.props);
	return (
		<div>
			Sign In
			<form name="signIn" onSubmit={this._onSubmit}>
				<div className="controlGroup">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name"  onChange={this.updateInput} />
				</div>
				<div className="controlGroup">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" onChange={this.updateInput} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
}
export default SignIn;