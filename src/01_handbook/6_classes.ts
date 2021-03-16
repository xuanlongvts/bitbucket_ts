// -------------------------------- Class Members
class Point_1 {
	x!: number;
	y!: number;
}
const pt_1 = new Point_1();
pt_1.x = 1;
pt_1.y = 2;

class Point_2 {
	x = 2;
	y = 3;
}
const pt_2 = new Point_2();
console.log(`x = ${pt_2.x}, y = ${pt_2.y}`);

class GoodGreeter {
	name: string;

	constructor() {
		this.name = "hi";
	}
}

//-- readonly
class Greeter_1 {
	readonly name: string = "hi";

	constructor(otherName?: string) {
		if (otherName) {
			this.name = otherName;
		}
	}

	err() {
		// this.name = "not OK";
		console.log("error");
	}
}
const gree_1 = new Greeter_1();
// gree_1.name = "hello";

//-- constructor
class Point_3 {
	x: number;
	y: number;

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}
class Point_4 {
	constructor(x: number, y: string);
	constructor(s: string);
	constructor(xs: any, y?: any) {}
}

//-- super calls
class Base_1 {
	k = 4;
}
class Derived_1 extends Base_1 {
	constructor() {
		super();
		console.log(this.k);
	}
}

//-- method
let z_1: number = 5;
class Point_5 {
	x = 10;
	y = 10;

	z_1: string = "hi";

	scale(n: number): void {
		this.x *= n;
		this.y *= n;

		console.log("z_1: ", z_1);

		this.z_1 = "hello";

		// z_1 = "hello"; // This is trying to modify 'x' from line 71, not the class property
	}
}

//-- getters / setters
class C_1 {
	_length = 0;

	get length() {
		return this._length;
	}

	set length(val) {
		this._length = val;
	}
}
const getLen = new C_1();
getLen.length = 5;

//-- Index Signatures
class MyClass_1 {
	[s: string]: boolean | ((s: string) => boolean);

	check(s: string) {
		return this[s] as boolean;
	}
}

// -------------------------------- Class Heritage
//-- implement clauses
interface Pingable {
	ping(): void;
}
class Sonar implements Pingable {
	ping() {
		console.log("Sonar: Ping");
	}
}
class Ball implements Pingable {
	// pong() {
	// 	console.log("Ball pong");
	// }

	ping() {
		console.log("Ball ping");
	}
}

//-- Cautions
interface Checkable {
	check(name: string): boolean;
}
class NameChecker implements Checkable {
	check(str: string) {
		return str.toLocaleLowerCase() === "ok";
	}

	// check(str) {
	// 	// Parameter 'str' implicitly has an 'any' type.ts(7006)

	// 	return str.toLocaleLowerCase() === "ok";
	// }
}

interface A_2 {
	x: number;
	y?: number;
}
class B_1 implements A_2 {
	x = 10;
}
const getB_1 = new B_1();
// getB_1.y = 10; // Property 'y' does not exist on type 'B_1'.ts(2339)

//-- extends clauses
class Animal_1 {
	move() {
		console.log("Moving along");
	}
}
class Dog_1 extends Animal_1 {
	woof(time: number) {
		for (let i = 0; i < time; i++) {
			console.log("woof");
		}
	}
}
const getDog_1 = new Dog_1();
getDog_1.move();
getDog_1.woof(5);

//-- overriding methods
class Base_2 {
	greet() {
		console.log("Hello world");
	}
}
class Derived_2 extends Base_2 {
	greet(name?: string) {
		if (name === undefined) {
			super.greet();
		} else {
			console.log(`Hi, ${name.toLocaleUpperCase()}`);
		}
	}
}
const getDer_2 = new Derived_2();
getDer_2.greet();
getDer_2.greet("Long Le");

const getBas_2: Base_2 = getDer_2;
getBas_2.greet();
// getBas_2.greet("aa"); // error Expected 0 arguments, but got 1.ts(2554)

//-- initialization order
class Base_3 {
	name = "Base_3";
	constructor() {
		console.log(`My name is ${this.name}`);
	}
}
class Derived_3 extends Base_3 {
	name = "Derived_3";
}
const getDer_3 = new Derived_3();
console.log(getDer_3.name);
/*
	"My name is Base_3" 
	"Derived_3" 
*/

//-- inheriting Built-in Types
class MsgError extends Error {
	constructor(m: string) {
		super(m);
	}

	sayErr() {
		return `Hi ${this.message}`;
	}
}
const getMsgErr = new MsgError("Loi 404");
console.log(getMsgErr.sayErr());

// -------------------------------- Member Visibility
//-- public, protected
class Greeter_2 {
	public greet() {
		console.log("Greeter_2 greet");
	}
	protected getName() {
		return "get Name";
	}
}
const getGree_2 = new Greeter_2();
getGree_2.greet();

class SpecialGreeter_1 extends Greeter_2 {
	public howdy() {
		console.log("howdy, ", this.getName());
	}
}
const getSpe_1 = new SpecialGreeter_1();
getSpe_1.greet();
getSpe_1.howdy();
// getSpe_1.getName(); // error

//-- Expose of protected members
class Base_4 {
	protected m = 10;
}
class Derived_4 extends Base_4 {
	m = 15;
}
const getDer_4 = new Derived_4();
console.log("getDer_4: ", getDer_4.m);

//-- Cross-hierarchy protected access
class Base_5 {
	protected x: number = 1;
}
class Derived_5 extends Base_5 {
	protected x: number = 2;
}
class Derived_6 extends Base_5 {
	fnc_1(other: Derived_6) {
		other.x = 3;
	}
	fnc_2(other: Base_5) {
		// other.x = 4; // Property 'x' is protected and only accessible through an instance of class 'Derived_6'.ts(2446)
	}
}

//-- private
class Base_6 {
	private x: number = 10;
}
const getBase_6 = new Base_6();
// getBase_6.x; // Property 'x' is private and only accessible within class 'Base_6'.ts(2341)

class Dervied_7 extends Base_6 {
	showX() {
		// console.log(this.x); // Property 'x' is private and only accessible within class 'Base_6'.ts(2341)
	}
}

//-- Cross-instance private access
class A_3 {
	private x: number = 10;

	public sameAs(other: A_3) {
		return other.x === this.x;
	}
}

// -------------------------------- Static Members
class MyClass_2 {
	static x = 0;
	static printX() {
		console.log("in 1 x: ", MyClass_2.x);
		console.log("in 2 x: ", this.x);
	}
}
console.log("out x: ", MyClass_2.x);
MyClass_2.printX();

class MyClass_3 {
	private static x = 5;
}
// console.log("MyClass_3: ", MyClass_3.x); // Property 'x' is private and only accessible within class 'MyClass_3'.ts(2341)

//-- static inherited
class Base_8 {
	static getGreeting() {
		return "Hello world";
	}
}
class Derived_8 extends Base_8 {
	myGreeting = Derived_8.getGreeting();
}
const getDer_8 = new Derived_8();
console.log(getDer_8.myGreeting);

//-- Special static name
class S_1 {
	// static name = 10; // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S_1'.ts(2699)
	static name_1 = 10;
}
console.log(S_1.name_1);

// -------------------------------- Generic classes
class Box_4<T> {
	content: T;
	constructor(val: T) {
		this.content = val;
	}
}
const getBox_4 = new Box_4("hi");
console.log(getBox_4.content);

//-- Type parameters in Static Members
class Box_5<Type> {
	// static defaultValue: Type; // Static members cannot reference class type parameters.ts(2302)
	static defaultValue: number;
}

// -------------------------------- this at Runtime in Classes
class MyClass_4 {
	name = "Myclass";
	getName() {
		return this.name;
	}
}
const initMyClass_4 = new MyClass_4();
const obj_4 = {
	name: "obj_4",
	getName: initMyClass_4.getName,
};
console.log(obj_4.getName());

//-- arrow functions
class MyClass_5 {
	name = "MyClass 5";

	getName = () => {
		return this.name;
	};
}
const initMyClass_5 = new MyClass_5();
const obj_5 = {
	name: "obj_5",
	getName: initMyClass_5.getName,
};
console.log("obj_5: ", obj_5.getName()); // MyClass 5

//-- this paramters
class MyClass_6 {
	name = "MyClass 6";
	getName(this: MyClass_6) {
		return this.name;
	}
}
const initMyClass_6 = new MyClass_6();
initMyClass_6.getName();

const copy_MyClass_6 = initMyClass_6.getName;
// console.log(copy_MyClass_6()); // The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass_6'.ts(2684)

// -------------------------------- this types
class Box_9 {
	contents: string = "";
	set(val: string) {
		this.contents = val;
		return this;
	}
}
class ClearableBox extends Box_9 {
	clear() {
		this.contents = "";
	}
}
const initClearableBox = new ClearableBox();
const getClearableBox = initClearableBox.set("hi");
console.log(getClearableBox);

class Box_10 {
	content: string = "";
	sameAs(other: this) {
		return other.content === this.content;
	}
}
class Derived_10 extends Box_10 {
	// otherContent: string = ""; // error
	//   Property 'otherContent' is missing in type 'Box_10' but required in type 'Derived_10'.ts(2345)
	content: string = "";
}

const initBox_10 = new Box_10();
const initDer_10 = new Derived_10();
initDer_10.sameAs(initBox_10);

// -------------------------------- Parameter Properties
class A_4 {
	constructor(public readonly x: number, protected y: number, private z: number) {}
}
const getA_4 = new A_4(1, 2, 3);
console.log("A_4 x: ", getA_4.x);
/* Error
console.log("A_4 y: ", getA_4.y);
console.log("A_4 x: ", getA_4.z);
 */

// -------------------------------- Class expression
const someClass_1 = class<T> {
	content: T;
	constructor(value: T) {
		this.content = value;
	}
};
console.log(new someClass_1("hi, NN"));

// -------------------------------- abstract Classes and Members
abstract class Base_9 {
	abstract getName(): string;

	printName() {
		console.log("hi: ", this.getName());
	}
}
// const initBase_9 = new Base_9(); // Cannot create an instance of an abstract class.ts(2511)
class Derived_9 extends Base_9 {
	getName() {
		return "World";
	}
}
// class Derived_9_1 extends Base_9 {} // error Non-abstract class 'Derived_9_1' does not implement inherited abstract member 'getName' from class 'Base_9'.ts(2515)

//-- abstract construct signatures
function greet_1_1(ctor: typeof Base_9) {
	// const instance = new ctor(); // Cannot create an instance of an abstract class.ts(2511)
}

function greet_2_2(ctor: new () => Base_9) {
	const instace = new ctor();
	instace.printName();
}
greet_2_2(Derived_9);

// -------------------------------- Relationships between classes
class Points_2 {
	x = 0;
	y = 0;
}
class Points_3 {
	x = 1;
	y = 2;
	z = 3;
}
const initP: Points_2 = new Points_3();

class Empty_1 {}
function func_5(x: Empty_1) {}
func_5(window);
func_5({});
func_5(func_5);
