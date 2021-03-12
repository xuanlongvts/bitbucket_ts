"use strict";
// -------------------------------- Exhaustiveness checking
function greeter(fn) {
    fn("Hello world");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething_2(fn) {
    console.log(fn.description + " return " + fn(6));
}
function fn_1(ctor) {
    return new ctor("Hello");
}
// -------------------------------- Generic functions
function firstElement_1(arr) {
    return arr[0];
}
function firstElement_2(arr) {
    return arr[0];
}
firstElement_2(["a", "b", "c"]);
firstElement_2([3, 4, 5]);
// Inference
function mapFunc_1(arr, func) {
    return arr.map(func);
}
const parsed = mapFunc_1(["1", "2", "3"], (n) => parseInt(n));
console.log("parsed: ", parsed);
// Constraints
function longest_1(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArr = longest_1([1, 2], [2, 3, 4]);
const longerStr = longest_1("alice", "bob");
// const notOk = longest_1(10, 20); // error Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.ts(2345)
// Working with Constrained values
function minimumLength(obj, minimum) {
    if (obj.length > minimum) {
        return obj;
    }
    else {
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
function combine_1(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr_1_join = combine_1([1, 2, 3], [4, 5]);
const arr_2_join = combine_1(["hello"], ["world"]);
// const arr_3_join = combine_1([6, 7, 8], ["hello"]); // Error Type 'string' is not assignable to type 'number'.ts(2322)
const arr_4_join = combine_1([7, 8, 9], ["Long Le"]);
// Guidelines for Writing Good Generic Functions
//-- Push Type Parameters Down
function firstEle_1(arr) {
    return arr[0];
}
function firstEle_2(arr) {
    return arr[0];
}
const first_ele_1 = firstEle_1([2, 3, 4]); // good
const first_ele_2 = firstEle_2([3, 6, 9]); // bad
//-- Use fewer type parameters
function filter_1(arr, func) {
    return arr.filter(func);
}
function filter_2(arr, func) {
    return arr.filter(func);
} // Func doesn’t do anything but make the function harder to read and reason about!
//-- Type Parameters Should Appear Twice
function greet_1(str) {
    console.log("Hello, ", str);
}
function greet_2(str) {
    console.log("Hello, ", str);
}
// -------------------------------- Optional Parameters
function opt_param_1(x) {
    console.log("x = ", x);
}
opt_param_2();
opt_param_2(10);
opt_param_2(undefined);
//-- Optional Parameters in Callbacks
function myForEach(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, ", index:", i));
function makeDate(mOrTimeStamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimeStamp, d);
    }
    else {
        return new Date(mOrTimeStamp);
    }
}
const d_1 = makeDate(12345678);
const d_2 = makeDate(5, 5, 5);
function fnc(x) { }
function fnc_1(x) {
    return `${x}, Oops`;
}
function len_1(x) {
    return x.length;
}
console.log(len_1("123"));
console.log(len_1([0]));
const resCond1 = Math.random() > 0.5 ? "hello" : [0];
// console.log(len_1(resCond1)); // error
// another way
function len_2(x) {
    return x.length;
}
len_2(resCond1);
const db = getDB();
const admins = db.filterUsers(function () {
    return this.isAdmin;
});
// -------------------------------- Other types to know about
//-- void
function typeVoid(x) {
    console.log("x: ", x);
}
//-- unknown
function f_1(a) {
    a.b();
}
function f_2(a) {
    // a.b(); // error Object is of type 'unknown'.ts(2571)
    console.log("a: ", a);
}
function safeParse(s) {
    return JSON.parse(s);
}
const obj_1 = safeParse(someRandomStrig);
//-- never
function fail(msg) {
    throw new Error(msg);
}
function fn_never(x) {
    if (typeof x === "string") {
        // do something
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
//-- Function
function funDoSomeThing(f) {
    f(1, 2, 3);
}
// -------------------------------- Rest Parameters and Arguments
//-- Rest Parameters
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
const getResultMulti = multiply(10, 1, 2, 3, 4);
//-- Rest Arguments
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
arr_1.push(...arr_2);
// const args_1 = [8, 5]; // Note that in general, TypeScript does not assume that arrays are immutable
const args_1 = [8, 5];
console.log(Math.atan2(...args_1));
// -------------------------------- Paramerter Destructing
function sum_1({ a, b, c }) {
    return a + b + c;
}
function sum_2({ a, b, c }) {
    return a + b + c;
}
const fun_1 = () => {
    return true;
};
const fun_2 = () => true;
const fun_3 = function () {
    return true;
};
function fun_4() {
    console.log("func 4");
    // return true; // error
}
