export as namespace super_greeter;

declare namespace MyClass {
	export interface MyClassMethodOptions {
		width?: number;
		height?: number;
	}
}

declare class Greeter {
	constructor(customGreeting?: string);

	greet: void;

	myMethod(opts: MyClass.MyClassMethodOptions): number;
}

export = Greeter;
