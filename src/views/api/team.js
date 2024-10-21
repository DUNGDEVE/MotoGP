
async function fetchTeam() {
	try {
		const response = await fetch(`http://localhost:3000/api/teams`);
		const data = await response.json();
		return data; // Return the fetched data (calendar)
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

async function addTeam(team) {
	try {
		const response = await fetch(`http://localhost:3000/api/teams/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(team)
		});
		const data = await response.json();
		return data; // Return the fetched data (calendar)
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

async function updateTeam(team) {
	try {
		const response = await fetch(`http://localhost:3000/api/teams/update`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(team)
		});
		const data = await response.json();
		return data; // Return the fetched data (calendar)
	} catch (e) {
		console.log(e); // Handle errors
		return undefined; // Or return a default value for error cases
	}
}

async function deleteTeam(id) {
	try {
		const response = await fetch(`http://localhost:3000/api/teams/delete`, {
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

export { fetchTeam, addTeam, updateTeam, deleteTeam }
