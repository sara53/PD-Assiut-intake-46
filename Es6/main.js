// const arr = [10, 20, 40];

// arr.push("Alaa");

// console.log(arr);

// const PI = 3.14;
// // pi = 2;
// console.log(PI * 2);
// let fname = "ahmed";
// console.log(fname);
// console.log(window.fname);

// if (true) {
// 	let x = 10;
// }

// console.log(x); //

// console.log(fname);
// let fname = "mona";
// console.log(fname);

// let fname = 10;

// fname = "alaa";
// fname = 10;
// fname = true;
// console.log(fname);

// var fname = "mona";
// console.log(fname);

// var fname = "mona";

// console.log(window);
// console.log(fname); // window.fname
// console.log(window.fname);
// setTimeout -- window.setTimeout
// function printValue() {
// 	let trackName = "PD";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(trackName); //
// 		console.log(i);
// 	}

// 	//console.log(" i ouside loop : ", i);
// }

// printValue();
// //spread operator
// let arr1 = [10, "mona", true, "alaa"]; //

// let arr2 = [true, ...arr1, "OS", "Front"];

// arr2.push("PD");

// console.log("arr 1 :", arr1);
// console.log("arr 2 :", arr2);

// let arr = [10, 20, 40, 60, 90, 0];

// //

// console.log(Math.max(...arr));

// let person1 = {
// 	fname: "mona",
// 	age: 20,
// 	address: "alex",
// };

// let person2 = { ...person1, city: "hello" };

// console.log(person1);
// console.log(person2);
// let arr = ["mona", 10, "ahmed", true];
// let [, , z] = arr;
// // let x = arr[0];
// // let y = arr[1];

// // console.log("x : ", x);
// // console.log("y : ", y);
// console.log("z : ", z);

// let [x, y] = [10, 20, 30];

// console.log(x);
// console.log(y);

// let [x, y] = useState(10);

// let person = {
// 	fname: "alaa",
// 	age: 25,
// 	color: "red",
// 	products: [10, 20, 30],
// };

// // let { fname: fname, color: color } = person;
// let { fname, color, products } = person;

// console.log("fname :", fname);
// console.log("color :", color);

// console.log(products);

// function fetchData(url) {
// 	return { response: ["posts"] };
// }

// // let { response: students } = fetchData();
// let { response: postsList } = fetchData(
// 	"https://jsonplaceholder.typicode.com/posts",
// ); // [posts]
// console.log(postsList);

// fetchData("https://jsonplaceholder.typicode.com/users"); // [users]
// default in Es6
// function sum(x = 0, y = 0) {
// 	console.log(x + y);
// }

// sum(3, 4);

// rest params

// function showData(...rest) {
// 	console.log(rest);
// 	// console.log("x ", x);
// 	// console.log("y ", y);
// }

// showData(10, "mona", "alaa", "hoda"); //

// let [x, ...y] = [10, "mona", "alaa", "hoda"];

// console.log("x :", x);
// console.log("y :", y);
/**
 *  functions
 * ----------------------------------
 *  == built in functions
 *  == user defined function
 *      -- function statement
 *      -- function expression
 *      -- arrow function
 *
 *
 */

// sum();

// function sum(x, y) {
// 	console.log("Sum");
// }

// result(); // varaible -- undefined
// let result = function (x, y) {
// 	console.log("sum");
// };

// let sayHello = () => console.log("Hello");

// let square = (x) => x * x;

// let sum = (x, y) => x + y;

// let showData = (x, y, z) => {
// 	console.log("hello pd");
// 	return x + y + z;
// };

// this -- window

// bind (search)
// var fname = "mona";

// let person = {
// 	fname: "alaa",
// 	age: 25,
// 	display: function () {
// 		var that = this; // that pattern
// 		setTimeout(function () {
// 			console.log(that.fname); // window
// 		}, 1000);
// 	},
// };

// person.display(); // person
// var fname = "mona";

// let person = {
// 	fname: "alaa",
// 	age: 25,
// 	display: () => {
// 		//console.log(this); //person
// 		setTimeout(() => {
// 			console.log(this.fname); // window
// 		}, 1000);
// 	},
// };

// person.display(); // person
/**
 *  == trim
 *  == trimStart
 *  == trimEnd
 *  == include
 *  == startsWith
 *  == endsWith
 *
 */

// let str = "               hello at iti            ";

// console.log(`pd Track ${str.trim()} :)`);
// console.log(`pd Track ${str.trimStart()} :)`);
// console.log(`pd Track ${str.trimEnd()} :)`);

// console.log(`hello at iti     ${str}
//                 :)
//                   ^_^
//                   ${str}
//                   `);
// let arr = [10, 20, 30, 60, 12];

// let result = arr.findIndex((value) => value > 25);

// console.log(result);

// fun

// function findElement(x, y,) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log("z :", z);
// 	console.log("--------------------");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// 	//
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// }

// and
let itiTracks = ["sPD", "Front", "OS"];
// let result = itiTracks.every((value) => value.startsWith("s")); //&&
let result = itiTracks.some((value) => value.startsWith("s")); // ||

console.log(result);
// let result = itiTracks.forEach((item, i, arr) => {
// 	console.log(item, i, arr);
// });

// console.log(result);
//

// let result = itiTracks.map(function (value, index, arr) {
// 	return {
// 		id: index + 1,
// 		trackName: value,
// 	};
// });
// console.log(result);
// let result = itiTracks.map(function (value, index, arr) {
// 	return `<div>
//             <h1>welcome ${value} at ITI</h1>

//     </div>`;
// });

// for (let i = 0; i < result.length; i++) {
// 	document.writeln(result[i]);
// }
