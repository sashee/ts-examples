{
	class C {
		public func() {
			return 2;
		}
	}

	const f = (c: C) => {
		return c.func();
	}

	console.log(f(new C())); // 2
}

{
	interface C {
		func(): number;
	}
	const c = () => {
		return {
			func: () => {
				return 2;
			}
		};
	}

	const f = (c: C) => {
		return c.func();
	}
	console.log(f(c())); // 2
}