
async function fetchRider() {
	try {
		const response = await fetch(`http://localhost:3000/api/riders/getAll`);
		const data = await response.json();
		return data; // Return the fetched data (calendar)
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

async function addRider(rider) {
	try {
		const response = await fetch(`http://localhost:3000/api/riders/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(rider)
		});
		const data = await response.json();
		return data; // Return the fetched data (calendar)
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

async function updateRider(rider) {
	try {
		const response = await fetch(`http://localhost:3000/api/riders/update`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(rider)
		});
		const data = await response.json();
		return data; // Return the fetched data (calendar)
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

async function deleteRider(id) {
	try {
		const response = await fetch(`http://localhost:3000/api/riders/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',

			},
			body: JSON.stringify(id)
		});
		const res = await response.json()

		if (res.status) {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

export { fetchRider, addRider, updateRider, deleteRider }
