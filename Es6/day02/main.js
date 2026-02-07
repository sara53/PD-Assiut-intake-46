//let fname = "ali";

// let myKey = "age";

// let person = {
// 	fname: fname, //fname:fname
// 	[myKey]: 25,
// 	address, // address:address

// 	// address, //address:address
// 	// display: function () {
// 	// 	console.log("hello display");
// 	// },
// 	display() {
// 		console.log("hello display");
// 	},
// };

// person.display();

// console.log(person);
// let person = {
// 	fname: "ali", //['fname','ali']
// 	age: 25, //['age',25]
// 	address: "alex",
// 	display: function () {
// 		console.log("cll");
// 	},
// };

// let entries = Object.entries(person);

// let result = entries.map((prop) => {
// 	return {
// 		key: prop[0],
// 		value: prop[1],
// 	};
// });
// console.log(result);
// let result = entries.map(([key, value]) => {
// 	return {
// 		key,
// 		value,
// 	};
// });
// console.log(result);
// for  -- in
// let keys = Object.keys(person);
// let values = Object.values(person);
// console.log(keys);
// console.log(values);
//["ali",25,"alex"]
//[fname,age,address]
// let person1 = {
// 	fname: "ali",
// 	age: 25,
// 	address: "alex",
// };

// let person2 = { gender: "male" };
// let person3 = { colors: ["red", "green", "blue"] };

// let result = Object.assign({}, person1, person2, person3);

// console.log(person1);
// console.log(person2);
// console.log(person3);

// console.log(result);

// class Student {
// 	static assign() {
// 		return {
// 			name: "aya",
// 		};
// 	}
// }

// let s1 = new Student();

// let x = Student.assign();

// console.log(x);
// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default name",
// 		age: "default age",
// 		address: "default address",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(
// 		`Fname = ${defaultValues.fname} age=${defaultValues.age} address=${defaultValues.address}`,
// 	);
// }

// showData({ fname: "alaa" });
// showData();

// showData({
// 	fname: "Hoda",
// 	age: 25,
// 	address: "alex",
// });
// function first() {
// 	console.log("First");
// 	second();
// 	console.log("Third");
// }
// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After settimeout execution");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");

// console.log("End");
// 3 request
// let productsId;
// setTimeout(() => {
// 	productsId = [100, 200, 300]; // response
// 	//2
// 	let product;
// 	setTimeout(() => {
// 		product = {
// 			id: productsId[0],
// 			name: "Book",
// 			price: 300,
// 		};
// 		let price;
// 		setTimeout(() => {
// 			price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 2000);
// }, 3000);

// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("cb1");
// 		},
// 		function () {
// 			console.log("cb2");
// 		},
// 	);
// }

// greet(function (x, y) {
// 	x();
// 	y();
// });

// Promise

/**
 *  == pending
 * == fulfilled
 * == rejected
 */
// let myPomise = new Promise(function (x, y) {
// 	//	x("Pd Track");
// 	y("Error message");
// });

// myPomise
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
