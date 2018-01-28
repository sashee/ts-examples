/*
{
	const f = (p: string) => {
		const o = {
			a: "a"
		};
		console.log(o[p]); // Error
	}
}
*/

{
	const f = (p: string) => {
		const o = {
			a: "a"
		} as {
			a: string,
			[index: string]: string
		};
		console.log(o[p]); // No error
	}
}