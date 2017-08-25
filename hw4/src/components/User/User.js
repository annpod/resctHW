import React, { Component } from 'react';
import {fetchUserList} from "../../api/api";

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
					<span>{item.name}</span>
					<span>{item.email}</span>
				</div>
			)
		)
	}

	componentDidMount() {
		//console.log('componentDidMount');
		let token = window.localStorage.getItem('token');
		const data = fetchUserList(token);
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
				Users:
				<span>{Users}</span>

			</div>
		)
	}
}
export default User;