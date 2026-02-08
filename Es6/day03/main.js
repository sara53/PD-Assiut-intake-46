// for (let i of person) {
// 	console.log(i);
// }
// i == key
// for (let key in person) {
// 	console.log(key);
// 	console.log(person[key]);
// 	console.log(person.key); // valid ??
// }

// for -- index
// i == index
// for (let i = 0; i < arr.length; i++) {
// 	console.log(i);
// }

//index
// for (let i in arr) {
// 	console.log(i); // get value
// }

// i == value
// for (let value of arr) {
// 	console.log(value);
// }

//
// let x = Symbol("studentId");

// let y = Symbol("studentId");

// console.log(x == y);
// console.log(y);

// let myKey = "age";
// let y = Symbol();
// let person = {
// 	fname: "ahmed",
// 	[Symbol()]: 25,
// 	[y]: function () {
// 		return {
// 			trackName: "pd",
// 		};
// 	},
// };
//let arr = ["mona", true, "ahmed"];
// // person[myKey] = "25";

// console.log(person[y]());
// let result = person[x]();
// console.log(result.trackName);

// console.log(Object.keys(person));
// console.log(person);
// console.log(person[myKey]); // 25
// arr[Symbol.iterator] = generateEvenNumber;

// for (let i of arr) {
// 	console.log(i);
// }
// let iter = arr[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next()); // {value:2,done:false}
// console.log(iter.next()); // {value:4,done:false}
// console.log(iter.next()); // {value:undefined,done:true}
// console.log(iter.next()); // {value:undefined,done:true}
// console.log(iter.next()); // {value:undefined,done:true}
// console.log(iter.next()); // {value:undefined,done:true}

// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**
 * 1- function return {}
 * 2- {} has next key , its value is a function
 * 3- function from step 2 return {value,done}
 *
 */
// Symbol.iteator == function

// not iterable
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	address: "alex",
// };

// console.log(person);
// function generateEvenNumber() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step > 10) {
// 				return { value: undefined, done: true };
// 			} else {
// 				return { value: step, done: false };
// 			}
// 		},
// 	};
// }

// for of -- values -- keys -- [key,value]

// generator function
// function* getEven() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// 	return "hello";
// }
// function* getEven() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }

// let iter = getEven();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// let person = {
// 	fname: "ahmed",
// 	age: 20,
// 	address: "alex",
// };

// person[Symbol.iterator] = getEven;

// for (let i of person) {
// 	console.log(i);
// }
// let person = {
// 	fname: "ahmed",
// 	age: 20,
// 	address: "alex",
// };
// let product = {
// 	name: "Book",
// 	price: 2000,
// 	category: "science",
// };
// function* getObjectValues() {
// 	// key
// 	for (let key in this) {
// 		yield this[key];
// 	}
// }

// let iter = getObjectValues();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// person[Symbol.iterator] = getObjectValues;
// product[Symbol.iterator] = getObjectValues;

// for (let i of person) {
// 	console.log(i);
// }
// console.log("===============================");
// for (let i of product) {
// 	console.log(i);
// }
// let arr = ["mona", "ahmed", "alaa"];

// arr[Symbol.iterator] = function () {
// 	let count = 0;
// 	// this.arr // arr
// 	return {
// 		next: () => {
// 			if (count < this.length) {
// 				return { value: this[count++], done: false };
// 			} else {
// 				return { value: undefined, done: true };
// 			}
// 		},
// 	};
// };

// let iter = arr[Symbol.iterator]();

//console.log(iter.next()); // caller iter
// generator -- do in your lab
// object using iterator
// for (let value of arr) {
// 	console.log(value);
// }
// superclass -- parentClass
// class Person {
// 	constructor(id = "", fname = "", age = "") {
// 		this.id = id; //
// 		this.fname = fname;
// 		this.age = age;
// 	}

// 	display() {
// 		// 100 line
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// }

// // subClass - childClass
// class User extends Person {
// 	constructor(id, fname, age, password) {
// 		super(id, fname, age);
// 		this.password = password;
// 	}
// 	display() {
// 		super.display();
// 		console.log(this.password);
// 	}

// 	generatePassword() {
// 		this.password = `${this.password.toUpperCase()}@#$%%%`;
// 		return this.password;
// 	}
// }

// // let p1 = new Person(1, "Ali", 25);
// // let p2 = new Person(2, "Alaa", 26);
// let user1 = new User(1, "Mona", 21, "mona");
// //console.log(user1);
// user1.display();
// console.log(user1.generatePassword());

// p1.display();
// p2.display();
// class Student {
// 	#ssn; // private feild
// 	constructor(ssn, fname, age) {
// 		this.#ssn = ssn;
// 		this.fname = fname;
// 		this.age = age;
// 	}

// 	get getSSN() {
// 		return this.#ssn;
// 	}

// 	set setSSN(value) {
// 		this.#ssn = value;
// 	}

// 	showGrades() {
// 		console.log("show Grades");
// 	}
// }

// let s1 = new Student(123, "ali", 25);

// s1.setSSN = "new SSN";

// console.log(s1.getSSN); //
// s1.setSSN("newSSN"); // set
// console.log(s1.getSSN()); // get

// s1.ssn = 1234567; // set
// console.log(s1.#ssn); // get

// Student.myStaticMethod();

// let s1 = new Student("ali");
// console.log(s1);
// s1.sleep();

// s1.myStaticMethod();

// class Human {
// 	constructor(fname) {
// 		this.fname = fname;
// 		if (this.constructor == Human) {
// 			throw new Error("can not take an object from abstract class");
// 		}
// 	}
// 	wake() {
// 		throw new Error("method not implemented");
// 	}
// 	sleep() {
// 		throw new Error("method not implemented");
// 	}
// }

// class Student extends Human {
// 	static count = 0;
// 	constructor(fname) {
// 		super(fname);
// 	}

// 	static testStaticMethod() {
// 		console.log("hello static");
// 	}
// }

// Student.testStaticMethod();
// Student.myStaticMethod = function () {
// 	console.log("Hello my static method");
// };
