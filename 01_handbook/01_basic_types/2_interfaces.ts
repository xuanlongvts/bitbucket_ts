// ------ First interface
interface LabledValue {
	label: string;
}
function printLabel(labledObj: LabledValue) {
	console.log("labeledObj: ", labledObj.label);
}
let myOjb = { size: 10, label: "Size 10 object" };
printLabel(myOjb);

// ------ Optional properties
interface SquareConfig {
	color?: string;
	width?: number;
}
interface SquareConfig2 {
	color?: string;
	width?: number;
	[propName: string]: any;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
	let newSquare = { color: "white", area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
let mySquare = createSquare({ color: "black" });
let mySquare_1 = createSquare({ colour: "green", width: 8 });
let mySquare_2 = createSquare({ width: 7, opacity: 0.5 } as SquareConfig);

function createSquare2(config: SquareConfig2): { color: string; area: number } {
	let newSquare = { color: "white", area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
let mySquare_3 = createSquare2({ colour: "purple", width: 66 });

// ------ Readonly properties
interface Point {
	readonly x: number;
	readonly y: number;
}
let p1: Point = { x: 5, y: 10 };
// p1.x = 20; // Cannot assign to 'x' because it is a read-only property

let arr: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr;
/* error
ro[0] = 10;
ro.push(5);
ro.length = 100;
arr = ro;
*/
arr = ro as number[];

// ------ Function Types
interface SearchFunc {
	(source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	let result = source.search(subString);
	return result > -1;
};

let mySearch_1: SearchFunc;
mySearch_1 = function (source: string, subString: string): boolean {
	let result = source.search(subString);
	return result > -1;
};

/* Error   Type 'string' is not assignable to type 'boolean'.
let mySearch_2: SearchFunc;
mySearch_2 = function (src, subStr) {
	let result = src.search(subStr);
	return "string";
};
*/

// ------ Indexable Types
interface StringArray {
	[index: number]: string;
}
let myArr: StringArray;
myArr = ["Bob", "Fred"];
let myStr: string = myArr[0];

interface Animal {
	name: string;
}
interface Dog extends Animal {
	breed: string;
}
/* Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
	[x: number]: Animal;
	[x: string]: Dog;
}

interface NumericDictionary {
	[index: string]: number;
	length: number;
	name: string;
}
*/
interface NumerOrStringDictionary {
	[index: number]: number | string;
	length: number; // ok, length is a number
	name: string; // ok, length is a string
}
interface ReadOnlyStringArray {
	readonly [index: number]: string;
}
let myArray: ReadOnlyStringArray = ["A", "B"];
// myArray[2] = "C"; // Index signature in type 'ReadonlyStringArray' only permits reading.

// ------ Class Types
interface ClockInterface {
	currentTime: Date;
}
class Clock implements ClockInterface {
	currentTime: Date = new Date();
	constructor(h: number, m: number) {}
}

interface ClockInterface2 {
	currentTime: Date;
	setTime(d: Date): void;
}
class Clock2 implements ClockInterface2 {
	currentTime: Date = new Date();
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {}
}

/* Different between the static and instance side of classes */
interface ClockConstructor {
	new (hour: number, minute: number);
}
/* error Clock3
class Clock3 implements ClockConstructor {
	currentTime: Date;
	constructor(h: number, m: number) {}
}
*/
interface ClockInterface_1 {
	tick(): void;
}
interface ClockConstructor2 {
	new (hour: number, minute: number): ClockInterface_1;
}
function createClock(ctor: ClockConstructor2, hour: number, minute: number) {
	return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface_1 {
	constructor(h: number, m: number) {}
	tick() {
		console.log("beep beep");
	}
}
class AnalogClock implements ClockInterface_1 {
	constructor(h: number, m: number) {}
	tick() {
		console.log("tick tock");
	}
}
let myDigital = createClock(DigitalClock, 5, 10);
let myAnalog = createClock(AnalogClock, 7, 8);

// Another simple way is to use class expressions:
interface ClockConstructor_3 {
	new (hour: number, minute: number): Clock_3_Interface;
}
interface Clock_3_Interface {
	tick(): void;
}
const Clock_1: ClockConstructor_3 = class Clock_1_1 implements Clock_3_Interface {
	constructor(h: number, m: number) {}
	tick() {
		console.log("beep beep");
	}
};
let clock_11 = new Clock_1(2, 3);
clock_11.tick();
