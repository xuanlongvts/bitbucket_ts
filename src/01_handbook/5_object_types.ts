// -------------------------------- Introduction
function greet_3(person: { name: string; age: number }) {
	return `Hi, ${person.name}, age: ${person.age}`;
}
interface Person1 {
	name: string;
	age: number;
}
function greet_4(person: Person1) {
	return `Hi, ${person.name}, age: ${person.age}`;
}
type Person2 = {
	name: string;
	age: number;
};
function greet_5(person: Person2) {
	return `Hi, ${person.name}, age: ${person.age}`;
}

// -------------------------------- Property Modifiers
//-- Optional Properties
interface PaintOptions {
	shape: string;
	xPos?: number;
	yPos?: number;
}
function paintShape_1(opts: PaintOptions) {
	let x = opts.xPos || undefined;
	let y = opts.yPos || undefined;
	console.log(opts.shape, x, y);
}
const ps_1 = paintShape_1({ shape: "circle" });
const ps_2 = paintShape_1({ shape: "square", xPos: 10 });
const ps_3 = paintShape_1({ shape: "angle", xPos: 1, yPos: 2 });

function paintShape_2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
	console.log(shape, xPos, yPos);
}

//-- readonly Properties
interface SomeType {
	readonly prop: string;
}
function doSomeThing_1(obj: SomeType) {
	console.log("prop: ", obj.prop);
	// obj.prop = "hello"; // error
}

interface Home_1 {
	readonly resident: {
		name: string;
		age: number;
	};
}
function visitForBirthday(home: Home_1) {
	console.log(`Happy brith day: ${home.resident.name}, age: ${home.resident.age}`);
	home.resident.age++;
}
// function evict_1(home: Home_1) {
// 	home.resident = {
// 		// error, not reasign
// 		name: "Abc",
// 		age: 42,
// 	};
// }

//--
interface Person_2 {
	name: string;
	age: number;
}
interface readOnly_Person_2 {
	readonly name: string;
	readonly age: number;
}

let writeablePerson: Person_2 = {
	name: "CDE",
	age: 20,
};
let readOnlyPerson: readOnly_Person_2 = writeablePerson;
console.log("age 1: ", readOnlyPerson.age);
// readOnlyPerson.age++; // error
writeablePerson.age = 22;
console.log("age 2: ", readOnlyPerson.age);

// -------------------------------- Extending Types
interface BasicAddress_1 {
	name?: string;
	street: string;
	city: string;
	country: string;
	postalCode: string;
}
interface addressWithUnit extends BasicAddress_1 {
	unit: string;
}

interface Colorful_1 {
	color: string;
}
interface Circle_1 {
	radius: number;
}
interface ColorfulCircle_1 extends Colorful_1, Circle_1 {}

const cc_1: ColorfulCircle_1 = {
	color: "red",
	radius: 42,
};

// -------------------------------- Intersection Types
interface Colorful_2 {
	color: string;
}
interface Circle_2 {
	radius: number;
}
type ColorfulCircle_2 = Colorful_2 & Circle_2;
function draw_1(circle: ColorfulCircle_2) {
	console.log("color: ", circle.color);
	console.log("radius: ", circle.radius);
}
draw_1({ color: "blue", radius: 10 });

// -------------------------------- Interface vs Intersections
// -------------------------------- Generic Ọbject Types

interface Box_1 {
	contents: unknown;
}
let x_2: Box_1 = {
	contents: "Hello World",
};
// We could check 'x.contents'
if (typeof x_2.contents === "string") {
	console.log(x_2.contents.toLowerCase());
}

// or we could use a type assertion
console.log((x_2.contents as string).toLowerCase());

//-- exa
interface NumberBox_1 {
	content: number;
}
interface StringBox_1 {
	content: string;
}
interface BooleanBox_1 {
	content: boolean;
}
function setContent_1(box: NumberBox_1, newContent: number): void;
function setContent_1(box: StringBox_1, newContent: string): void;
function setContent_1(box: BooleanBox_1, newContent: boolean): void;
function setContent_1(box: { content: any }, newContent: any) {
	box.content = newContent;
}
//-- other way
interface Box_2<T> {
	content: T;
}
let box_1: Box_2<string>;
let box_2: Box_2<number>;
let box_3: Box_2<boolean>;

interface Apple {}
type AppleBox = Box_2<Apple>; // same as {content: Apple}
let newContent_1: AppleBox = {
	content: "aaa",
};
console.log(newContent_1.content);

function setContent_2<T>(box: Box_2<T>, newContent: T) {
	box.content = newContent;
}

//-- type alias
type Box_3<T> = {
	content: T;
};
type orNull<T> = T | null;
type oneOrMany<T> = T | T[];
type oneOrManyOrNull<Type> = orNull<oneOrMany<Type>>; // oneOrMany | orNull
type oneOrManyOrNullString = oneOrManyOrNull<string>; // oneOrMany | string

//-- The Array Type
function doSomething_4(arr: Array<string>) {
	console.log("array first: ", arr[0]);
}
let myArr_4: string[] = ["hi", "you"];
doSomething_4(myArr_4);
doSomething_4(new Array("xin", "chao"));

//-- The ReadonlyArray Type
function doStuff_1(value: ReadonlyArray<string>) {
	const copy = value.slice();
	console.log(`First element array: ${value[0]}`);
	// value.push("aa"); // error
}
function doStuff_2(value: readonly string[]) {
	const copy = value.slice();
	console.log(`First element array: ${value[0]}`);
	// value.push("aa"); // error
}

// init ReadonlyArray
const roArr_1: ReadonlyArray<string> = ["1", "2", "3"];

let arr_x_1: readonly string[] = [];
let arr_y_1: string[] = [];
arr_x_1 = arr_y_1;
// arr_y_1 = arr_x_1; // error

//-- Tuple types
type StringNumberPair = [string, number];
function doSomething_5(pair: StringNumberPair) {
	const one = pair[0];
	const two = pair[1];
	console.log("one: ", one, ", two: ", two);
}
doSomething_5(["hi", 42]);

// description for StringNumberPair
interface StringNumberPair_1 {
	length: 2;
	0: string;
	1: number;
	slice(start?: number, end?: number): Array<string | number>;
}

// destructure
function doSomething_6(stringHash: [string, number]) {
	const [intpuStr, hash] = stringHash;
	console.log("inputStr: ", intpuStr);
	console.log("hash: ", hash);
}
doSomething_6(["mot", 23234]);

//-- optional tuple
type Either2dOr3d = [number, number, number?];
function setCoordinate_1(coord: Either2dOr3d) {
	console.log("length: ", coord.length); // length 2 | 3
}

// rest elements
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const rest_1: StringNumberBooleans = ["hi", 1];
const rest_2: StringBooleansNumber = ["nice", true, false, true, 2];
const rest_3: BooleansStringNumber = [true, false, true, false, true, "world", 3];
console.log("rest_1: ", rest_1);
console.log("rest_2: ", rest_2);
console.log("rest_3: ", rest_3);

// exa 2
function readButtonInput_1(name: string, version: number, ...input: boolean[]) {}
// can rewrite
function readButtonInput_2(...args: [string, number, ...boolean[]]) {
	const [name, version, ...input] = args;
	console.log(name, version, input);
}

//-- readonly tuple types
function doSomeThing_4(pair: readonly [string, number]) {
	// pair[0] = "hi"; // error
}

let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
	return Math.sqrt(x ** 2 + y ** 2);
}
// The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.ts(2345)
// distanceFromOrigin(point);
