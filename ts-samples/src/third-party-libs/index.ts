import {limit, filter, reduce} from "gentoo";

const gen = function*() {
	let i = 0;
	while (true) {
		yield i++;
	}
}

const isPrime = (n: number) => {
	for(let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return n >= 2;
}

const res = reduce(
	limit(
		filter(
			gen(),
			isPrime
		),
		10
	),
	(acc, n) => acc + n,
	0
);