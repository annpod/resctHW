const userdata = { "user":"sa", "password": "admin" };

export const fetchUserList = () => {
	fetch(`http://api.jyotish.gift/api/v1/auth/login/`, {
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		method: 'POST',
		body: JSON.stringify(userdata)
	})
	.then(response => response.ok ? response.json() : Promise.reject(response.statusText))
	.then(data => data)
	.catch((error) => {
		return Promise.reject(error)
	});
};
console.log(fetchUserList());
