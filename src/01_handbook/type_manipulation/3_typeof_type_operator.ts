console.log(typeof "hello");

type Predicate = (x: unknown) => boolean;
type K_1 = ReturnType<Predicate>; // K_1 = boolean

function func_6() {
	return {
		x: 1,
		y: 2,
	};
}
type F_1 = ReturnType<typeof func_6>; // F_1 = { x: number, y: number }
