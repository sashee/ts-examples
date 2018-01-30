import underscore from "underscore";
import lodash from "lodash";

{
	const v = underscore.object(underscore.pairs({a: "a"})) // {}
}

{
	const native = Object.assign({}, ...Object.entries({a: "a"})); // any
}

{
	const v = lodash.fromPairs(lodash.toPairs({a: "a"})); // {[index: string]: string}
	const v2 = lodash.fromPairs(lodash.map(lodash.toPairs({a: "a"}), ([k, v]) => [k, v])); // {[index: string]: any}
}
