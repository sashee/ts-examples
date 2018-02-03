{
	class C1 {
		public f(params: { a: string }) {
		}
	}
	class C2 {
		public f(params: { b: string }) {
		}
	}

	const fx = (c: C1 | C2) => {
		const params = { a: "a", b: "b" };
		// c.f(params); // Error
	}
}
{
	interface C {
		f: (params: {a: string} & {b: string}) => void;
	}
	class C1 implements C {
		public f(params: { a: string }) {
		}
	}
	class C2 implements C {
		public f(params: { b: string }) {
		}
	}

	const fx = (c: C) => {
		const params = { a: "a", b: "b" };
		c.f(params);
	}

}