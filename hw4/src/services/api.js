class Api {
	constructor() {
		this.url = 'http://api.jyotish.gift/api/v1/auth/'
	}

	logIn(userdata) {
		return fetch(`${this.url}login/`, {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(userdata)
		})
		.then(response => response.json())
		.then(json => {
			return json;
		})
		.catch(function (error) {
			console.error(error);
		});
	}

	getUsers(token) {
	return fetch(`${this.url}secret/`, {
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			}),
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			return json;
		})
		.catch(function (error) {
			console.error(error);
		})
	}
	signUp(userdata) {
		return fetch(`${this.url}signup/`, {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify(userdata)
		})
		.then(response => response.json())
		.then(json => {
			return json;
		})
		.catch(function (error) {
			console.error(error);
		})
	}
}
export default new Api();


