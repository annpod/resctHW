// class Api {
// 		constructor() {
// 			this.headers = {
// 				headers: new Headers({
// 					'Content-Type': 'application/json'
// 					}),
// 				headers: new Headers({
// 					'Content-Type': 'application/json',
// 					'Authorization': `Bearer ${token}`,
// 				}),
// 			}
// 			this.url = 'http://api.jyotish.gift/api/v1/auth/'
// 		}
// 		logIn(){
// 				return fetch(`${this.url}login/`+this.headers[0]).then(data => data.json()).then(console.log(data))
// 		}
// 		getUsers(url,body,token) {
// 			return fetch(`${this.url}secret/`+ body).then(response => response.json()).then(console.log(data))
// 		}
// }
// export default new Api();



export const fetchUser = (userdata) => {
	return fetch(`http://api.jyotish.gift/api/v1/auth/login/`, {
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
	.catch(function(error) {
		console.log(error);
	});
};

export const fetchUserList = (token) => {
	return fetch(`http://api.jyotish.gift/api/v1/auth/secret/`, {
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
		console.log(error);
	})
}