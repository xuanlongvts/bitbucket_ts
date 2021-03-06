// ------ boolean
let isDone: boolean = true;

// ------ number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n; // error

// ------ string
let color: string = "blue";
color = "red";
let fullname: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullname}.

I'll be ${age + 1} years old next month.`;

// ------ array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [2, 3, 4];

// ------ tuple
let tuple: [string, number];
tuple = ["Long Le", 10];
// tuple = [10, "hello"]; // error
console.log(tuple[0].substring(1)); // ong Le
// console.log(tuple[1].substring(1)); // error substring does not exist on type number
// tuple[3] = "world"; // error Tuple type '[string, number]' of length '2' has no element at index '3'

// ------ enum
enum Color {
	Red,
	Green,
	Blue,
}
let var_color: Color = Color.Red; // var_color = 0

enum Color1 {
	Red = 2,
	Green,
	Blue,
}
let var_color_1: Color1 = Color1.Green; // var_color_1 = 3

enum Color2 {
	Red = 5,
	Green = 10,
	Blue = 15,
}
let var_color_2: Color2 = Color2.Green; // var_color_2 = 10

// ------ Unknow
let notSure: unknown = 5;
notSure = "maybe a string instead";
notSure = false;

declare const maybe: unknown; // maybe could be a string, object, boolean, undefined or other types
// const aNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'.
if (maybe === true) {
	const aBoolean: boolean = maybe; // TypeScript knows that maybe is a boolean now
	// const aStr: String = maybe; // Type 'boolean' is not assignable to type 'String'.ts(2322)
}
if (maybe === "string") {
	const aStr: string = maybe;
	// const aBoolean: boolean = maybe; // Type 'string' is not assignable to type 'boolean'.
}

// ------ Any
declare function getValue(key: String): any;
const str: String = getValue("myString");

let looselyTyped: any = 4;
looselyTyped.ifItexist(); // OK, ifItExists might exist at runtime
looselyTyped.toFixed(2); // OK, toFixed exists (but the compiler doesn't check)

let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(2); // Property 'toFixed' does not exist on type 'unknown'.ts(2339)
let looselyType: any = {};
let var_d = looselyTyped.a.b.c.d;

// ------ Void
function warnUser(): void {
	console.log("This is my warning message");
}
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

// ------ Null and Undefined ( Not much else we can assign to these variables! )
let var_u: undefined = undefined;
let var_n: null = null;

// ------ Never
// Function returning never must not have a reachable end point
function error(message: string): never {
	throw new Error(message);
}

// Inferred return type is never
function fail() {
	return error("something else");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
	while (true) {}
}

// ------ Object
declare function create(o: object | null): void;
// Ok
create({ a: "a" });
create(null);
create(undefined); // undefined is not a subtype of null

// create(42); // Argument of type 'number' is not assignable to parameter of type 'object'

// ------ Type assertions
let someValue: unknown = "this is a  string";
let strLength: number = (someValue as string).length;

// the other version is the "angle-bracket" syntax
let strLength1: number = (<string>someValue).length;
