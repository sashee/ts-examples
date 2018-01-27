{
	const t = [1, 2]; // number[]
}
{
	const t = [1, "2"]; // (string | number)[]
}

{
	const t = [1, 2] as [number, number] // [number, number]

	console.log(t[2]); // No error
	t[2] = 5; // No error
}