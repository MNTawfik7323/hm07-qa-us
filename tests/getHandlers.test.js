// eslint-disable-next-line no-undef
const config = require('../config');

//Testing to see if get status is returning the proper 200 status
test('Status code should be 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

//Testing to ensure the correct body is returned with the get function 
test('Body should sontain For picnic', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("For picnic")
});

//Another test to see if get status is returning the proper 200 status for the cards section
test('Status code should be 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/cards/1`);
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});


//Another GET request test of the ccards section with the ID of 1
test('Body should contain for the situation', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/cards/1`);
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["name"]).toBe("For the situation")
});