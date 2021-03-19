// -------------------------------- Objects with Properties
declare namespace myLib_1 {
	function makeGreeting_1(s: string): string;
	let numberOfGreetings: number;
}
let myResult_1 = myLib_1.makeGreeting_1("hi world");
let count_1 = myLib_1.numberOfGreetings;

// -------------------------------- Overloaded Functions
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

let getVal_1: Widget = getWidget(43);
let getVal_2: Widget[] = getWidget("all of them");

// -------------------------------- Reusable Types (Interfaces)
interface GreetingSetting_1 {
	greeting: string;
	duration?: number;
	color?: string;
}
declare function greet_3(setting: GreetingSetting_1): void;

greet_3({
	greeting: "hello world",
	duration: 500,
});

// -------------------------------- Reusable Types (Type Aliases)
declare class Greeters_1 {
	greeting: string;
	constructor(val: string);
}
class MyGreeter extends Greeters_1 {}
type GreetingLike = string | (() => string) | MyGreeter;
declare function greet_6(g: GreetingLike): void;

function getGreeting_1() {
	return "howdy";
}

greet_6("hi");
greet_6(getGreeting_1);
greet_6(new MyGreeter());

// -------------------------------- Organizing Types
declare namespace GreetingLib_1 {
	interface LogOptions {
		verbose?: boolean;
	}
	interface AlterOptions {
		model: string;
		title?: string;
		color?: string;
	}
}
declare namespace GreetingLib_1.Options {
	interface Log {
		verbose?: boolean;
	}
	interface Alter {
		model: string;
		title?: string;
		color?: string;
	}
}

// -------------------------------- Classes
declare class Greeters_2 {
	constructor(greeting: string);
	greeting: string;
	showGreeting(): void;
}
const myGreeter_2 = new Greeters_2("hello, world");
myGreeter_2.greeting = "howdy";
myGreeter_2.showGreeting();
class SpecialGreeter extends Greeter_2 {
	constructor() {
		super("Very super greeting");
	}
}

// -------------------------------- Global variables
declare var foo_2: number;
console.log("Half the number of widgets is " + foo / 2);

// -------------------------------- Global functions
declare function func_global_1(greet: string): void;
func_global_1("hi");
