function getProductsList() {
	let myPromise = new Promise(function (x, y) {
		var productsId = [100, 200, 300];
		setTimeout(() => {
			if (productsId) {
				x(productsId);
			} else {
				y("Error on getting products list");
			}
		}, 3000);
	});

	return myPromise;
}

function getProductDetails(productId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let product = {
				id: productId,
				name: "Book",
				price: 300,
			};
			product ? resolve(product) : reject("Error on getting product details");
		}, 1000);
	});
}

function getPrice(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let price = product.price;
			price ? resolve(price) : reject("Error on getting price");
		}, 500);
	});
}

// getProductsList()
// 	.then((productsList) => {
// 		return getProductDetails(productsList[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let productsList = await getProductsList();
// 		let product = await getProductDetails(productsList[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function getData() {
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getData();

async function getTrackName() {
	return "Pd";
}

getTrackName()
	.then((response) => {
		console.log(response);
	})
	.catch(console.log);
