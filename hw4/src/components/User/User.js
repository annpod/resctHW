import React, { Component } from 'react';
import Api from "../../services/api";

class User extends Component{
	constructor(){
		super();
		this.state = {
			userdata: null
		}
		this.getUsers = this.getUsers.bind(this);
	}

	getUsers(){
		let obj = this.state.userdata.message;
		let vals = Object.keys(obj).map(key => obj[key]);
		return vals.map((item,index) => (
				<div key={index}>
					<strong>{item.name}&nbsp; - &nbsp;</strong>
					<span>{item.email}</span>
				</div>
			)
		)
	}

	componentDidMount() {
		let token = window.localStorage.getItem('token');
		const data = Api.getUsers(token);
		data.then(json => this.setState({
			userdata: json
		})
		);
	}

	render(){
		let Users;
		if (this.state.userdata) {
			Users = this.getUsers();
		}
		return (
			<div>
				<h3>Users:</h3>
				{!Users &&
				<span>Loading...</span>}
				<span>{Users}</span>

			</div>
		)
	}
}
export default User;