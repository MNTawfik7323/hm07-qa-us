// eslint-disable-next-line no-undef
const config = require('../config');

// Constant request body created to ensure a kit is created for further testing
const requestBody1 = {
		"cardId": 1, 
		"name": "Sprint 7 Test" 
}

// Posting items from request body and creating a kit, ensuring proper 201 is returned
test('Status code should be 201', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody1)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

// request body created to post products to the created kit
const requestBody2 = {
		"productsList": [
			{
				"id": 3,
				"quantity": 4 
			},
			{
				"id": 7,
				"quantity": 3
			}
		] 
}

// Ensuring proper 200 status is returned, confirming items were posted to the created kit
test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

//Request body created to put items into the already created kit
const requestBody3 = {
    "name": "Sprint 7 Test",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        }
    ]
}

//Test confirming items were properly added to kit with put method
test('Response body should contain true', async () => {
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody3) 
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true)
});
