// -------------------------------- Introduction
function identity_1<Type>(arg: Type): Type {
	// console.log("length: ", arg.length); // error
	return arg;
}
const output_1 = identity_1<string>("Hello");

function identity_2<Type>(arg: Type[]): Type[] {
	console.log("length: ", arg.length);
	return arg;
}
function identity_3<Type>(arg: Array<Type>): Array<Type> {
	console.log("length: ", arg.length);
	return arg;
}

// -------------------------------- Generic Types
let myIdentity_1: <Type>(arg: Type) => Type = identity_1;
let myIdentity_2: { <Type>(arg: Type): Type } = identity_1;
interface GenericIdentityFn_1 {
	<Type>(arg: Type): Type;
}
let myIdentity_3: GenericIdentityFn_1 = identity_1;

interface GenericIdentityFn_2<Type> {
	(arg: Type): Type;
}
let myIdentity_4: GenericIdentityFn_2<number> = identity_1;

// -------------------------------- Generic Classses
class GenericNumber<NumType> {
	zeroValue!: NumType;
	add: ((x: NumType, y: NumType) => NumType) | undefined;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
	return x + y;
};
console.log("add number: ", myGenericNumber.add(1, 2));

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = function (x, y) {
	return x + y;
};
console.log("add string: ", myGenericString.add(myGenericString.zeroValue, "test"));

// -------------------------------- Generic Constraints
interface Lengthwise {
	length: number;
}
function logIdentity<Type extends Lengthwise>(arg: Type): Type {
	console.log("length: ", arg.length);
	return arg;
}
logIdentity({ length: 10, size: 3 });

// -------------------------------- Using Type Parameters in Generic Constraints
function getProperties_1<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}
let x_pro_1 = { a: 1, b: 2, c: 3, d: 4 };
getProperties_1(x_pro_1, "a");
// getProperties_1(x_pro_1, "m"); // error Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

// -------------------------------- Using Class Types in Generics
function create_1<T>(c: { new (): T }): T {
	return new c();
}

// another way
class BeeKeeper {
	hasMask!: boolean;
}
class ZooKeeper {
	nametag!: string;
}
class Animal {
	numLegs!: number;
}
class Bee extends Animal {
	keeper!: BeeKeeper;
}
class Lion extends Animal {
	keeper!: ZooKeeper;
}
function createInstance<A extends Animal>(c: new () => A): A {
	return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
