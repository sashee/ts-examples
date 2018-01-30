import {List} from "immutable";

declare module "immutable" {
	interface List<T>{
		filter(iteratee: (v: T) => boolean): List<T>
	}
}
