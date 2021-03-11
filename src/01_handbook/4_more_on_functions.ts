// -------------------------------- Exhaustiveness checking
function greeter(fn: (s: string) => void) {
	fn("Hello world");
}
function printToConsole(s: string) {
	console.log(s);
}
greeter(printToConsole);

// -------------------------------- Call Signatures
type DescribableFunction = {
	description: string;
	(someArg: number): boolean;
};
function doSomething_2(fn: DescribableFunction) {
	console.log(fn.description + " return " + fn(6));
}

// -------------------------------- Construction Signatures
type SomeObject = any;
type SomeConstructor = {
	new (s: string): SomeObject;
};
function fn_1(ctor: SomeConstructor) {
	return new ctor("Hello");
}
interface CallOrContructor {
	new (s: string): Date;
	(n?: number): number;
}

// -------------------------------- Generic functions
function firstElement_1(arr: any[]) {
	return arr[0];
}
function firstElement_2<Type>(arr: Type[]): Type {
	return arr[0];
}
firstElement_2(["a", "b", "c"]);
firstElement_2([3, 4, 5]);

// Inference
function mapFunc_1<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
	return arr.map(func);
}
const parsed = mapFunc_1(["1", "2", "3"], (n) => parseInt(n));
console.log("parsed: ", parsed);

// Constraints
function longest_1<Type extends { length: number }>(a: Type, b: Type) {
	if (a.length > b.length) {
		return a;
	} else {
		return b;
	}
}
const longerArr = longest_1([1, 2], [2, 3, 4]);
const longerStr = longest_1("alice", "bob");
// const notOk = longest_1(10, 20); // error Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.ts(2345)

// Working with Constrained values
function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
	if (obj.length > minimum) {
		return obj;
	} else {
		// return { length: minimum }; // error
		return {
			...obj,
			length: minimum,
		};
	}
}
const arrMinis = minimumLength([1, 2, 3], 6);
console.log("arrMinis, ", arrMinis);

// Specifying Type Arguments
function combine_1<Type>(arr1: Type[], arr2: Type[]): Type[] {
	return arr1.concat(arr2);
}
const arr_1_join = combine_1([1, 2, 3], [4, 5]);
const arr_2_join = combine_1(["hello"], ["world"]);
// const arr_3_join = combine_1([6, 7, 8], ["hello"]); // Error Type 'string' is not assignable to type 'number'.ts(2322)

const arr_4_join = combine_1<string | number>([7, 8, 9], ["Long Le"]);

// Guidelines for Writing Good Generic Functions
//-- Push Type Parameters Down
function firstEle_1<Type>(arr: Type[]) {
	return arr[0];
}
function firstEle_2<Type extends any[]>(arr: Type) {
	return arr[0];
}
const first_ele_1 = firstEle_1([2, 3, 4]); // good
const first_ele_2 = firstEle_2([3, 6, 9]); // bad

//-- Use fewer type parameters
function filter_1<T>(arr: T[], func: (args: T) => boolean): T[] {
	return arr.filter(func);
}
function filter_2<T, Func extends (args: T) => boolean>(arr: T[], func: Func): T[] {
	return arr.filter(func);
} // Func doesn’t do anything but make the function harder to read and reason about!

//-- Type Parameters Should Appear Twice
function greet_1<String extends string>(str: String) {
	console.log("Hello, ", str);
}
function greet_2(str: string) {
	console.log("Hello, ", str);
}

// -------------------------------- Optional Parameters
function opt_param_1(x?: number) {
	console.log("x = ", x);
}
declare function opt_param_2(x?: number): void;
opt_param_2();
opt_param_2(10);
opt_param_2(undefined);

//-- Optional Parameters in Callbacks
function myForEach(arr: any[], callBack: (arg: any, index?: number) => void) {
	for (let i = 0; i < arr.length; i++) {
		callBack(arr[i], i);
	}
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, ", index:", i));

// -------------------------------- Function overloads
function makeDate(timeStamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimeStamp: number, d?: number, y?: number): Date {
	if (d !== undefined && y !== undefined) {
		return new Date(y, mOrTimeStamp, d);
	} else {
		return new Date(mOrTimeStamp);
	}
}
const d_1 = makeDate(12345678);
const d_2 = makeDate(5, 5, 5);
// const d_3 = makeDate(2, 3); // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.ts(2575)

function fnc(x: boolean): void;
function fnc(x: boolean) {}
// function fnc(x: string): void; // This overload signature is not compatible with its implementation signature.ts(2394)

function fnc_1(x: string): string;
function fnc_1(x: string | number) {
	return `${x}, Oops`;
}
// function fnc_1(x: number): boolean; // Function implementation is missing or not immediately following the declaration.ts(2391)

//-- Writing good overloads
function len_1(s: string): number;
function len_1(arr: any[]): number;
function len_1(x: any) {
	return x.length;
}

console.log(len_1("123"));
console.log(len_1([0]));
const resCond1 = Math.random() > 0.5 ? "hello" : [0];
// console.log(len_1(resCond1)); // error

// another way
function len_2(x: any[] | string): number {
	return x.length;
}
len_2(resCond1);

// declaring this in function
interface User {
	id: number;
	isAdmin: boolean;
}
interface DB {
	filterUsers(filter: (this: User) => boolean): User[];
}
declare const getDB: () => DB;
const db = getDB();
const admins = db.filterUsers(function () {
	return this.isAdmin;
});

// -------------------------------- Other types to know about
//-- void
function typeVoid(x: string): void {
	console.log("x: ", x);
}
//-- unknown
function f_1(a: any) {
	a.b();
}
function f_2(a: unknown) {
	// a.b(); // error Object is of type 'unknown'.ts(2571)
	console.log("a: ", a);
}
function safeParse(s: string): unknown {
	return JSON.parse(s);
}
declare const someRandomStrig: string;
const obj_1 = safeParse(someRandomStrig);

//-- never
function fail(msg: string): never {
	throw new Error(msg);
}
function fn_never(x: string | number) {
	if (typeof x === "string") {
		// do something
	} else if (typeof x === "number") {
		// do something else
	} else {
		x; // has type 'never'!
	}
}
//-- Function
function funDoSomeThing(f: Function) {
	f(1, 2, 3);
}

// -------------------------------- Rest Parameters and Arguments
//-- Rest Parameters
function multiply(n: number, ...m: number[]) {
	return m.map((x) => n * x);
}
const getResultMulti = multiply(10, 1, 2, 3, 4);

//-- Rest Arguments
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
arr_1.push(...arr_2);

// const args_1 = [8, 5]; // Note that in general, TypeScript does not assume that arrays are immutable
const args_1 = [8, 5] as const;
console.log(Math.atan2(...args_1));

// -------------------------------- Paramerter Destructing
function sum_1({ a, b, c }: { a: number; b: number; c: number }) {
	return a + b + c;
}
// or
type ABC = { a: number; b: number; c: number };
function sum_2({ a, b, c }: ABC) {
	return a + b + c;
}

// -------------------------------- Assignability of Functions
//-- Return type void
type voidFunc = () => void;

const fun_1: voidFunc = () => {
	return true;
};
const fun_2: voidFunc = () => true;
const fun_3: voidFunc = function () {
	return true;
};
function fun_4(): void {
	console.log("func 4");
	// return true; // error
}
