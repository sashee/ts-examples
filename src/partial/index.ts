import * as _ from "lodash";

const f = (a: number, b: number, c:number) => `${a} => ${b} => ${c}`;

{
	const p = _.partial(f, _, _, 5);
	console.log(p(3, 4)); // (number, number) => string
}

{
	const p = _.partial(f, _, 4, _);
	console.log(p(3, 5)); // (...any) => any
}