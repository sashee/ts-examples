declare module "gentoo" {
	const limit: <T>(gen: IterableIterator<T>, num: number) => IterableIterator<T>;
	const filter: <T>(gen: IterableIterator<T>, fn: (e: T) => boolean) => IterableIterator<T>;
	const reduce: <T, G>(gen: IterableIterator<T>, fn: (acc: G, e: T) => G, initial: G) => IterableIterator<T>;
}