// @ts-check
class C_2 {
	constructor() {
		this.constructorOnly = 0;
		this.constructorUnknown = undefined;
	}

	method() {
		this.constructorOnly = false; // Type 'boolean' is not assignable to type 'number'.
		this.constructorUnknown = "plunkbat"; // ok, constructorUnknown is string | undefined
		this.methodOnly = "ok"; // ok, but methodOnly could also be undefined
	}

	method2() {
		this.methodOnly = true; // also, ok, methodOnly's type is string | boolean | undefined
	}
}

class C_3 {
	constructor() {
		/** @type {number | undefined} */
		this.prop = undefined;

		/** @type {number | undefined} */
		this.count;
	}
}
let var_C_3 = new C_3();
var_C_3.prop;
var_C_3.count = "string"; // Type '"string"' is not assignable to type 'number | undefined'.

// -------------------------------- Constructor function are equivalent to classes
function C_4() {
	this.constructorOnly = 0;
	this.constructorUnknown = undefined;
}
C_4.prototype.method1 = function () {
	this.constructorOnly = false;
	this.constructorUnknown = "hi";
};

// -------------------------------- CommonJS module are supported
const fs = require("fs");
module.exports.readfile = function (f) {
	return fs.readFileSync(f);
};

// -------------------------------- Class, function, object literals are namespaces
class C_5 {}
C_5.D = class {};

// -- And, for pre-ES2015 code, it can be used to simulate static methods:
function outer_1() {
	this.y = 2;
}
outer_1.inner = function () {
	this.yy = 3;
};
outer_1.inner();

// It can also be used to create simple namespaces:
var nas = {};
nas.C = class {};
nas.func = function () {};
nas;

// Other variants are allowed as well:
var nas_1 = (function (n) {
	return n || {};
})();
nas_1.CONST = 1;

var assign_1 = assign_1 || function () {};
assign_1.extra = 1;

// -------------------------------- Object literal are open-ended
var obj_1 = { a: 1 };
obj_1.b = 2;

/** @type {{a: number}} */

var obj = { a: 1 };
obj.a = 3;
obj.b = 5;

// -------------------------------- null, undefined, and empty array initializers are of type any or any[]
function Foo_3(i = null) {
	if (!i) i = 1;
	var j = undefined;
	j = 2;
	this.l = [];
}
var foo_3_var = new Foo_3();
foo_3_var.l.push(foo_3_var.i);
foo_3_var.l.push("end");

// -------------------------------- Function parameters are optional by default
function Bar_3(a, b) {
	console.log(a + " " + b);
}
Bar_3(1);
Bar_3(1, 2);
Bar_3(1, 2, 3); // Expected 0-2 arguments, but got 3.ts(2554)

//-- JSDoc annotated functions are excluded from this rule

/**
 * @param {string} [somebody] - Somebody's name
 */
function sayHello(somebody) {
	if (!somebody) {
		somebody = "John Doe";
	}
	console.log("Hello " + somebody);
}
sayHello();

// -------------------------------- Var-args parameter declaration inferred from use of arguments
/**
 * @param {...number} args
 */
function sum_1(/* number */) {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
		total += i;
	}
	return total;
}

// -------------------------------- In JSDoc references
/** @type{Array} */
var x = [];
x.push(1);
x.push("hi");

/** @type{Array<number>} */
var y = [];
y.push(1);
y.push("hi");

// -------------------------------- In JSDoc references
var p = new Promise((res, rej) => {
	rej();
});
p; // var p: Promise<any>
