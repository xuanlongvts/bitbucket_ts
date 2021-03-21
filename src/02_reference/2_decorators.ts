// -------------------------------- Decorators and Decorator Factories
function sealed(value: string) {
	return function (target: any) {
		// some codes here
	};
}

// -------------------------------- Decorators composition
function first() {
	console.log("first(): factory evaluted");

	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log("first(): called");
	};
}
function second() {
	console.log("second(): factory evaluted");

	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log("second(): called");
	};
}

class ExampleClass {
	@first()
	@second()
	method() {
		console.log("method");
	}
}

// -------------------------------- Class Decorators
function sealed_1(constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}

@sealed_1
class BugError {
	type = "report";
	title: string;

	constructor(t: string) {
		this.title = t;
	}
}
const bug = new BugError("hello");
bug.title = "title Bug Error";
bug.type = "type Error Bug";
console.log(bug.title);

//-- Next we have an example of how to override the constructor to set new defaults.
function reportableClassDecorator<T extends { new (...arg: any[]): {} }>(constructor_1: T) {
	return class extends constructor_1 {
		reportingUrl = "http://www....";
	};
}

@reportableClassDecorator
class BugReport {
	type = "report";
	title: string;

	constructor(t: string) {
		this.title = t;
	}
}
const bugReport = new BugReport("Needs dark mode");
console.log(bugReport.title);
console.log(bugReport.type);
// console.log(bugReport.reportingUrl); // Property 'reportingUrl' does not exist on type 'BugReport'.ts(2339)

// -------------------------------- Method Decorators
function enumerable(value: boolean) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		descriptor.enumerable = value;
	};
}

class Greeter_11 {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}

	@enumerable(false)
	greet() {
		return `Hi ${this.greeting}`;
	}
}

// -------------------------------- Accessor Decorators
function configable(value: boolean) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		descriptor.configurable = value;
	};
}

class Points_4 {
	private _x: number;
	private _y: number;
	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	@configable(false)
	get X() {
		return this._x;
	}

	@configable(true)
	get Y() {
		return this._y;
	}
}
const initPoints_4 = new Points_4(5, 10);
console.log(initPoints_4.X);
console.log(initPoints_4.Y);
