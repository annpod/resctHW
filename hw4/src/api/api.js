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