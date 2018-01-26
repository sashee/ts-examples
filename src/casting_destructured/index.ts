import _ from "underscore";

const objs = [
	{ k: "1", v: "v1" },
	{ k: "2", v: "v2" },
	{ k: "3", v: null}   
];

{
	const [nonNulls, nulls] = _.partition(objs, (e) => e.v !== null);
	// Both nonNulls and nulls can have null values
}
{
	// Doesn't work this way
	// const [nonNulls: {k: string, v: string}[], nulls: {k: string, v: null}[]] = _.partition(objs, (e) => e.v !== null);
}
{
	const [nonNulls, nulls] = _.partition(objs, (e) => e.v !== null) as [{ k: string, v: string }[], {k: string, v: null}[]];
	// nonNulls can not contain null as values
	// nulls can only contain null as values
}