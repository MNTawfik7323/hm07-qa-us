// eslint-disable-next-line no-undef
const config = require('../config');

// Constant request body created to ensure products are added in the next section of code
const requestBody = {
    "productsList": [
		{
			"id": 5,
			"quantity": 1
		}
	]
}

// Posting items from the constant request body and ensuring proper 201 code is returned
test('Status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

// Testing to ensure the proper Courier Service is called to fulfill the order
test('Response body Should Contain Order and Go', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.courierService).toBe("Order and Go")
});