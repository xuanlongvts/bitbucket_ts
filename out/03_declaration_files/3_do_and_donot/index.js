"use strict";
// -------------------------------- Return types of callbacks
// wrong
function func_type_1(x) {
    x();
}
// right
function func_type_2(x) {
    x();
}
function func_type_3(x) {
    var k = x();
    // k.someThingElse(); // error
}
