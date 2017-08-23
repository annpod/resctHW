import React, { Component } from 'react';
import './auth.css';
const userdata = { "user":"sa", "password": "admin" };

const fetchUserList = () => {
	fetch(`http://api.jyotish.gift/api/v1/auth/login/`,{

		method: 'POST',
		body: "user=sa&password=admin"//JSON.stringify(userdata)
	})
	.then(response => response.ok ? response.json() : Promise.reject(response.statusText))
	.then(data => data)
	.catch((error) => {
		return Promise.reject(error)
	});
};
console.log(fetchUserList());


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
		console.log('name',this.state.name);
		console.log('password',this.state.name);
	return (
		<div>
			Sign In
			<form>
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