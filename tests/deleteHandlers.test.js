// eslint-disable-next-line no-undef
const config = require('../config');

//Request body for first test to ensure items in request body are added to an order
const requestBody1 = {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        }
    ] 
}


//Confirming with 201 status that items in request body were added to the order
test('Status code should be 201', async () => {
let actualStatusCode;
try {
	const response = await fetch(`${config.API_URL}/api/v1/orders`, {
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

//Test to delete the created order//This test fails, this is a bug in the system, confirmed through Postman
test('Deleting a created order', async () => {
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/7`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true)
});

//further test to see that system is returning an error code when finding the created order to delete it
test('Status code should be 404 TESTING BUG SYSTEM IS RETURNING 404', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/7`, {
			method: 'DELETE',
		})
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(404)
});

//Further test confirming the system is not finding the created order
//order was confirmed as created by checking the kit_model .CSV found in the apiDoc 
test('Deleting a created order TESTING BUG, SYSTEM IS NOT FINDING CREATED CART', async () => {
	let actualResponseBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/7`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.message).toBe("Cart with id=7 not found")
});
