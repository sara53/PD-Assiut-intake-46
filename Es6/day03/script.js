// let sum = (x, y) => x + y;
// let sqaure = (x) => x + x;

// export default function sayHello() {
// 	console.log("hello pd teack");
// }
// let traclName = "OS";

// export { sum, sqaure, traclName };

export function express() {
	return {
		listen(msg, cb) {
			console.log(msg);
			cb();
		},
	};
}
