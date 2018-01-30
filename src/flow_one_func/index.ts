import {flow} from "lodash";

/*
console.log(flow(
	(a: number) => a + 1, // Error
)(2));
*/

console.log(flow(
	(a: number) => a + 1,
	(b) => b + 1, // No error
)(2));