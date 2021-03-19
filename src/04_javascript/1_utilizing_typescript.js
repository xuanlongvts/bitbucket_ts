// @ts-check
/** @type {number} */
var x;
x = 0;
// x = false; // error Type 'boolean' is not assignable to type 'number'.ts(2322)

// @ts-ignore
x = true;

// @ts-expect-error
x = "";

/** @type {{a: number}} */
var obj = { a: 1 };
obj.a = 3;
obj.b = 5;
