// -------------------------------- begin
function padLeft(padding: number | string, input: string) {
	if (padding === "number") {
		return new Array(padding + 1).join(" ") + input;
	}
	return padding + input;
}

// -------------------------------- typeof type guards
console.log(Boolean("hello"));
console.log(!!"world");
function printAll(strs: string | string[] | null) {
	if (strs && typeof strs === "object") {
		for (const s of strs) {
			console.log(s);
		}
	} else if (typeof strs === "string") {
		console.log("strs: ", strs);
	} else {
	}

	// different way

	// if (strs) {
	// 	if (typeof strs === "object") {
	// 		for (const s of strs) {
	// 			console.log(s);
	// 		}
	// 	} else if (typeof strs === "string") {
	// 		console.log("strs: ", strs);
	// 	} else {
	// 	}
	// }
}

// -------------------------------- Equality narrowing
function example(x: string | number, y: string | boolean) {
	if (x === y) {
		x.toUpperCase();
		y.toUpperCase();
	} else {
		console.log(x);
		console.log(y);
	}
}

// -------------------------------- instanceof narrowing
function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}

// -------------------------------- assignments
let x_1 = Math.random() < 0.5 ? 10 : "hello world";
x_1 = 1;
x_1 = "goobye!";
console.log("x_1: ", x);
// x_1 = true; // error Type 'boolean' is not assignable to type 'string | number'.

// -------------------------------- Control flow analysis
function examples_1() {
	let x: string | number | boolean;

	x = Math.random() < 0.5;
	console.log("x = ", x);
	if (Math.random() < 0.5) {
		x = "hello";
		console.log("x ==== ", x);
	} else {
		x = 100;
		console.log(x);
	}
	return x;
}

// -------------------------------- Using type predicates
interface Cat {
	numberOfLives: number;
}
interface Dog {
	isAGoodBoy: boolean;
}
function isCat(animal: Cat | Dog): animal is Cat {
	return (animal as Cat).numberOfLives !== undefined;
}

// -------------------------------- Discriminated unions
interface Shape_1 {
	kind: "circle" | "square";
	radius?: number;
	sideLength?: number;
}
function getArea_1(shape: Shape_1) {
	if (shape.kind === "circle") {
		return Math.PI * shape.radius! ** 2; // ! ===> none null
	}
}
// another way
interface Circle {
	kind: "circle";
	radius: number;
}
interface Square {
	kind: "square";
	sideLength: number;
}
type Shape_2 = Circle | Square;

function getArea_2(shape: Shape_2) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.sideLength ** 2;
		default:
			const _exhaustiveCheck: never = shape;
			return _exhaustiveCheck;
	}
}

// -------------------------------- Exhaustiveness checking
// Add case default in swithc of getArea_2 function
interface Triangle {
	kind: "triangle";
	sideLength: number;
}
type Shape_3 = Circle | Square | Triangle;
function getArea_3(shape: Shape_3) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.sideLength ** 2;
		// default:
		// 	const _exhaustiveCheck: never = shape; // Type 'Triangle' is not assignable to type 'never'
		// 	return _exhaustiveCheck;
	}
}
