// ------ boolean
var isDone = true;
// ------ number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big = 100n; // error
// ------ string
var color = "blue";
color = "red";
var fullname = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullname + ".\n\nI'll be " + (age + 1) + " years old next month.";
// ------ array
var list = [1, 2, 3];
var list1 = [2, 3, 4];
// ------ tuple
var tuple;
tuple = ["Long Le", 10];
// tuple = [10, "hello"]; // error
console.log(tuple[0].substring(1)); // ong Le
// console.log(tuple[1].substring(1)); // error substring does not exist on type number
// tuple[3] = "world"; // error Tuple type '[string, number]' of length '2' has no element at index '3'
// ------ enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var var_color = Color.Red; // var_color = 0
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 2] = "Red";
    Color1[Color1["Green"] = 3] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
var var_color_1 = Color1.Green; // var_color_1 = 3
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 10] = "Green";
    Color2[Color2["Blue"] = 15] = "Blue";
})(Color2 || (Color2 = {}));
var var_color_2 = Color2.Green; // var_color_2 = 10
// ------ Unknow
var notSure = 5;
notSure = "maybe a string instead";
notSure = false;
// const aNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'.
if (maybe === true) {
    var aBoolean = maybe; // TypeScript knows that maybe is a boolean now
    // const aStr: String = maybe; // Type 'boolean' is not assignable to type 'String'.ts(2322)
}
if (maybe === "string") {
    var aStr = maybe;
    // const aBoolean: boolean = maybe; // Type 'string' is not assignable to type 'boolean'.
}
var str = getValue("myString");
var looselyTyped = 4;
looselyTyped.ifItexist(); // OK, ifItExists might exist at runtime
looselyTyped.toFixed(2); // OK, toFixed exists (but the compiler doesn't check)
var strictlyTyped = 4;
// strictlyTyped.toFixed(2); // Property 'toFixed' does not exist on type 'unknown'.ts(2339)
var looselyType = {};
var var_d = looselyTyped.a.b.c.d;
// ------ Void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
// ------ Null and Undefined ( Not much else we can assign to these variables! )
var var_u = undefined;
var var_n = null;
// ------ Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("something else");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
// Ok
create({ a: "a" });
create(null);
create(undefined); // undefined is not a subtype of null
// create(42); // Argument of type 'number' is not assignable to parameter of type 'object'
// ------ Type assertions
var someValue = "this is a  string";
var strLength = someValue.length;
// the other version is the "angle-bracket" syntax
var strLength1 = someValue.length;
