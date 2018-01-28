import {Seq} from "immutable";

/*
Seq([1, 2])
	.filter((e) => e > 1); // Error
*/

Seq([1, 2])
	.filter((e) => e as number > 1);

Seq([1, 2])
	.filter((e) => e! > 1);