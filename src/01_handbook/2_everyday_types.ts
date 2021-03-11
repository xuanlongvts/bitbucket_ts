// --------------------------------	string, number, boolean
let str1: string = "world";
let num1: number = 10;
let bol1: boolean = true;

// --------------------------------	arrays
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["hello", "world"];
let arr3: Array<number> = [4, 5, 6];

// --------------------------------	any
let any1: any = { x: 0 };
// None of these lines of code are errors
any1.foo();
any1();
any1.bar = 100;
any1 = "hello";
const num2: number = any1;

// --------------------------------	Type annotations on variables
let myName1: string = "Alice";
let myName2 = "Alice";

// --------------------------------	Functions
// Functions: 1. Parameter Type annotations
function greet1(name: string) {
	console.log(`Hello, ${name.toUpperCase()} !!`);
}
greet1("Long Le");
// Functions: 2. Return Type annotations
function getFavoriteNumber(): number {
	return 10;
}
// Functions: 3. Anonymous functions
const names = ["mot", "hai", "ba"];
names.forEach(function (s) {
	console.log(s.toUpperCase());
});

// --------------------------------	Object Types
function printCoord(pt: { x: number; y: number }) {
	console.log("The coordinate's x value is: ", pt.x, ", y: ", pt.y);
}
printCoord({ x: 3, y: 7 });
// Optional Properties
function printName(obj: { first: string; last?: string }) {
	console.log("first: ", obj.first);
	console.log("last: ", obj?.last);
}
printName({ first: "Long" });

// --------------------------------	Union Types
// Union Types: 1. Defining a Union Type
function printId_1(id: number | string) {
	console.log("Your id is: ", id);
}
printId_1(10);
printId_1("mot tram");
// Union Types: 2. Working with Union Type
function printId_2(id: number | string) {
	// console.log(id.toUpperCase()); // error
	if (typeof id === "string") {
		console.log("string type:", id.toUpperCase());
	} else {
		console.log("number type: ", id);
	}
}

function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
		console.log("Hello ", x.join(" and "));
	} else {
		console.log("Welcome lone traveler", x);
	}
}
welcomePeople(["nam", "hai", "yen"]);
welcomePeople("Long Le");

function getFirstThree(x: number[] | string) {
	console.log("get one to three", x.slice(0, 3));
}
getFirstThree([1, 2, 3, 4, 5]);
getFirstThree("Welcome");

// -------------------------------- Types Aliases
type userInputStr = string;
function sanitizeInput(str: string): userInputStr {
	return str;
}
let userInput = sanitizeInput("Long Le");
userInput = "new input";

// -------------------------------- Interfaces
interface Points {
	x: number;
	y: number;
}
function printCoord_1(pt: Points) {
	console.log(`x: ${pt.x}, y: ${pt.y}`);
}
printCoord_1({ x: 10, y: 20 });

// -------------------------------- Type Assertions
const myCanvas_1 = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas_2 = <HTMLCanvasElement>document.getElementById("main_canvas");
// const str_1 = "hello" as number; // error

// -------------------------------- Literal Type
let x: "hello" = "hello";
x = "hello";
// x = "howdy"; error
function printText_1(s: string, aligment: "left" | "right" | "center") {
	console.log("s: ", s);
	console.log("aligment: ", aligment);
}
printText_1("Long", "left");

function compare(a: string, b: string): -1 | 0 | 1 {
	return a === b ? 0 : a > b ? 1 : -1;
}
console.log("compare: ", compare("1", "2"));

// combine with non-literal types
interface Option {
	width: number;
}
function configure_1(x: Option | "auto") {
	console.log("width: ", x);
}
configure_1({ width: 10 });
configure_1("auto");

// -------------------------------- null and undefined
function doSomething(x: string | undefined) {
	if (x === undefined) {
	} else {
		console.log("Hello ", x);
	}
}

// Non-null Assertion Operator (Postfix!)
function liveDangerously(x?: number | undefined) {
	console.log("x: ", x!.toFixed());
}

// -------------------------------- Less common Primitives
const oneHundred_1: bigint = BigInt(100); // Creating a bigint via the BigInt function
const oneHundred_2: bigint = 100n; // Creating a BigInt via the literal syntax (setting target: "es2020" in tsconfig.json)

// -------------------------------- Symbol
const sym_1 = Symbol("name");
const sym_2 = Symbol("name");
console.log("sym_1 === sym_2", sym_1 === sym_1);
