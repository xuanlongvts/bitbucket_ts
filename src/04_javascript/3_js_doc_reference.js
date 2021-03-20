// -------------------------------- @type
/** @type {string} */
var s;

/** @type {Window} */
var win;

/** @type {Promise<string>} */
var promiseString;

/** @type {HTMLElement} */
var myEle_1 = document.querySelector("aaa");

/** @type {string | boolean} */
var sb;

/** @type {number[]} */
var ns;

/** @type {Array.<number>} */
var nds;

/** @type {Array<number>} */
var nas;

/** @type {{a: string, b: number}} */
var var_9;

/** @type {Object.<string, number>} */
var strNumber;

/** @type {Object.<number, object>} */
var arrLike;

/** @type {function(string, boolean): number} Closure syntax */
var sbn;

/** @type {(s: string, b: boolean) => number} */
var sbn2;

/** @type {Function} */
var func;

/** @type {*} - can be 'any' type */
var start;

/** @type {?} - unknown type (same as 'any') */
var question;

// -------------------------------- Casts
/** @type {number | string} */
var nubmerOrString = Math.random() < 0.5 ? "hi" : 100;
var typeAssertedNumber = /** @type {number} */ (nubmerOrString);

// -------------------------------- @param and @returns
/**
 * @param {string} p1 - A string param.
 * @param {string=} p2 - An optinal param (Closure syntax)
 * @param {string} [p3] - Another optional param (Jsdoc)
 * @param {string} [p4="defaut value"] - An optional param with a default value
 * @return {string} - This is the result
 */
function strStrStr(p1, p2, p3, p4) {}

/**
 * @return {Promise<string>}
 */
function ps() {}

/**
 * @returns {{a: string, b: number}}
 */
function ab() {}

// -------------------------------- @typedef, @callback, and @param
//-- @typedef may be used to define complex types. Similar syntax works with @param.
/**
 * @typedef {Object} SpecialType - create a new type name 'SpecialType'
 * @property {string} prop1 - a string property of SpecialType
 * @property {number} prop2 - a nunber property of SpecialType
 * @property {number=} prop3 - an option number property of SpecialType
 * @prop {number} [prop4] - an optional number property of SpecialType
 * @prop {number} [prop5=10] - an optional number property of SpecialType with default
 */

/** @type {SpecialType} */
var specObj;
specObj.prop3;

//-- You can use either object or Object on the first line.
/**
 * @typedef {object} SpecialType1 - creates a new type named 'SpecialType'
 * @property {string} prop1 - a string property of SpecialType
 * @property {number} prop2 - a number property of SpecialType
 * @property {number=} prop3 - an optional number property of SpecialType
 */

/** @type {SpecialType1} */
var specialTypeObject1;

//-- @param allows a similar syntax for one-off type specifications
/**
 * @param {Object} options - The shape is the same as SpecialType above
 * @param {string} options.prop1
 * @param {number} options.prop2
 * @param {number=} options.prop3
 * @param {number} [options.prop4]
 * @param {number} [options.prop5=42]
 */
function special(options) {
	return (options.prop4 || 1010) + options.prop5;
}

//-- @callback is similar to @typedef, but it specifies a function type instead of an object type:
/**
 * @callback Pridicate
 * @param {string} data
 * @param {number} [index]
 * @reeturn {boolean}
 */

/** @type {Pridicate} */
const ok = (s) => !(s.length % 2);

//-- Of course, any of these types can be declared using TypeScript syntax in a single-line @typedef:
/** @typedef {{ prop1: string, prop2: string, prop3?: number}} SpecialType */
/** @typedef {(data: string, index?: number) => boolean} Pridicate */

// -------------------------------- @template
/**
 * @template T
 * @param {T}
 * @return {T}
 */
function id_1(params) {
	return params;
}

//-- You can also specify a type constraint before the type parameter name. Only the first type parameter in a list is constrained:
/**
 * @template {string} K - K must be a string or string literal
 * @template {{ serious(): string }} Seriousalizable - must have a serious method
 * @param {K} key
 * @param {Seriousalizable} object
 */
function seriousalize(key, object) {
	console.log("key: ", key);
	console.log("object: ", object);
}

// -------------------------------- Classes
class C_4 {
	/**
	 * @param {number} data
	 */
	constructor(data) {
		this.name = "foo";

		/** @type {string | null} */
		this.title = null;

		/** @type {number} */
		this.size;

		this.initialize(data);
	}

	/**
	 * @param {string} s
	 */
	initialize = function (s) {
		this.size = s.length;
	};
}
var getC4 = new C_4(1);
var result_4 = C_4(2);

// -------------------------------- @constructor
/**
 * @constructor
 * @param {number} data
 */
function Con_1(data) {
	this.name = "foo";
	console.log(data);
}

// -------------------------------- @this
/**
 * @this {HTMLElement}
 * @param {*} e
 */
function callbackForLater(e) {
	this.clientHeight = parseInt(e);
}

// -------------------------------- @extends
/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {}

// -------------------------------- @enum
/**
 * @emnu {number}
 */
const JSDocState = {
	BeginningOfLine: 0,
	SawAsterisk: 1,
	SavingComments: 2,
};
JSDocState.SavingComments;

/** @enum {function(number): number} */
const MathFunc = {
	add1: (n) => n + 1,
	id: (n) => -n,
	sub1: (n) => n - 1,
};
MathFunc.add1;

// -------------------------------- Patterns that are known NOT to be supported
function aNormalFunc() {}
/**
 * @type {aNormalFunc}
 */
var wrong;

/**
 * @type {typeof aNormalFunc}
 */
var right;

//-- Postfix equals on a property type in an object literal type doesn’t specify an optional property:
/**
 * @type {{ a: string, b: number= }}
 */
var wrong1;

/**
 * @type {{ a: string, b?: number }}
 */
var right1;

//-- Nullable types only have meaning if strictNullChecks is on:

/**
 * @type {?number}
 * With strictNullChecks: true  -- number | null
 * With strictNullChecks: false -- number
 */
var nullable;

/**
 * @type {number | null}
 * With strictNullChecks: true  -- number | null
 * With strictNullChecks: false -- number
 */
var unionNullable;

//-- Non-nullable types have no meaning and are treated just as their original type:
/**
 * @type {!number}
 * Just has type number
 */
var normal;
