// import sayHello, { sum, sqaure } from "./script.js";
// import * as all from "./script.js";

// let execute = () => {
// 	console.log(all.sum(3, 4));
// 	console.log(all.sqaure(4));
// 	all.default();
// };

// execute();

// export naming
// export default

import { express } from "./script.js";

const server = express();

server.listen("Server is lisenting at port 300", () => {
	console.log("Connect to db");
});
