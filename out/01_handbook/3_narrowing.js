"use strict";
// -------------------------------- begin
function padLeft(padding, input) {
    if (padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
// -------------------------------- typeof type guards
console.log(Boolean("hello"));
console.log(!!"world");
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log("strs: ", strs);
    }
    else {
    }
    // different way
    // if (strs) {
    // 	if (typeof strs === "object") {
    // 		for (const s of strs) {
    // 			console.log(s);
    // 		}
    // 	} else if (typeof strs === "string") {
    // 		console.log("strs: ", strs);
    // 	} else {
    // 	}
    // }
}
// -------------------------------- Equality narrowing
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
// -------------------------------- instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// -------------------------------- assignments
let x_1 = Math.random() < 0.5 ? 10 : "hello world";
x_1 = 1;
x_1 = "goobye!";
console.log("x_1: ", x);
// x_1 = true; // error Type 'boolean' is not assignable to type 'string | number'.
// -------------------------------- Control flow analysis
function examples_1() {
    let x;
    x = Math.random() < 0.5;
    console.log("x = ", x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log("x ==== ", x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
function isCat(animal) {
    return animal.numberOfLives !== undefined;
}
function getArea_1(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; // ! ===> none null
    }
}
function getArea_2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
function getArea_3(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        // default:
        // 	const _exhaustiveCheck: never = shape; // Type 'Triangle' is not assignable to type 'never'
        // 	return _exhaustiveCheck;
    }
}
