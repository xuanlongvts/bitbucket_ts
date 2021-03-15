"use strict";
// -------------------------------- Introduction
function identity_1(arg) {
    // console.log("length: ", arg.length); // error
    return arg;
}
const output_1 = identity_1("Hello");
function identity_2(arg) {
    console.log("length: ", arg.length);
    return arg;
}
function identity_3(arg) {
    console.log("length: ", arg.length);
    return arg;
}
// -------------------------------- Generic Types
let myIdentity_1 = identity_1;
let myIdentity_2 = identity_1;
let myIdentity_3 = identity_1;
let myIdentity_4 = identity_1;
// -------------------------------- Generic Classses
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log("add number: ", myGenericNumber.add(1, 2));
let myGenericString = new GenericNumber();
myGenericString.zeroValue = "";
myGenericString.add = function (x, y) {
    return x + y;
};
console.log("add string: ", myGenericString.add(myGenericString.zeroValue, "test"));
function logIdentity(arg) {
    console.log("length: ", arg.length);
    return arg;
}
logIdentity({ length: 10, size: 3 });
// -------------------------------- Using Type Parameters in Generic Constraints
function getProperties_1(obj, key) {
    return obj[key];
}
let x_pro_1 = { a: 1, b: 2, c: 3, d: 4 };
getProperties_1(x_pro_1, "a");
// getProperties_1(x_pro_1, "m"); // error Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
// -------------------------------- Using Class Types in Generics
function create_1(c) {
    return new c();
}
// another way
class BeeKeeper {
}
class ZooKeeper {
}
class Animal {
}
class Bee extends Animal {
}
class Lion extends Animal {
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
