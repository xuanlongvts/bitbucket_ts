// -------------------------------- Number, String, Boolean, Symbol and Object
function func_wrong(s: String): String;

// Do use the types number, string, boolean, and symbol.
function func_true(s: string): string;

// -------------------------------- Optional paramters in callbacks
// wrong
interface fetcher {
	getObject(done: (data: any, eslapsedTime?: number) => void): void;
}
// right
interface fetcher {
	getOject(done: (data: any, eslapsedTime: number) => void): void;
}

// -------------------------------- Overloads and callbacks
// Don’t write separate overloads that differ only on callback arity:
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

// Do write a single overload using the maximum arity:
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

// -------------------------------- Function Overloads
// wrong
declare function fn_overload_1(x: any): any;
declare function fn_overload_1(x: HTMLElement): number;
declare function fn_overload_1(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
fn_overload_1(myElem); // x: any, wat ?

// right
declare function fn_overload_2(x: any): any;
declare function fn_overload_2(x: HTMLElement): number;
declare function fn_overload_2(x: HTMLDivElement): string;

var myElem_1: HTMLDivElement;
fn_overload_2(myElem_1); // string

// -------------------------------- Use optional parameters
// wrong
interface Example_1 {
	diff(one: string): number;
	diff(one: string, two: string): number;
	diff(one: string, two: string, three: boolean): number;
}

// right
interface Example_2 {
	diff(one: string, two?: string, three?: boolean): number;
}

// -------------------------------- Use Union Types
// wrong
interface Moment_1 {
	utcOffset(): number;
	utcOffset(b: number): Moment_1;
	utcOffset(b: string): v;
}

// right
interface Moment_2 {
	utcOffset(): number;
	utcOffset(b: number | string): Moment_2;
}
