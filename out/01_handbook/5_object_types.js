"use strict";
// -------------------------------- Introduction
function greet_3(person) {
    return `Hi, ${person.name}, age: ${person.age}`;
}
function greet_4(person) {
    return `Hi, ${person.name}, age: ${person.age}`;
}
function greet_5(person) {
    return `Hi, ${person.name}, age: ${person.age}`;
}
function paintShape_1(opts) {
    let x = opts.xPos || undefined;
    let y = opts.yPos || undefined;
    console.log(opts.shape, x, y);
}
const ps_1 = paintShape_1({ shape: "circle" });
const ps_2 = paintShape_1({ shape: "square", xPos: 10 });
const ps_3 = paintShape_1({ shape: "angle", xPos: 1, yPos: 2 });
function paintShape_2({ shape, xPos = 0, yPos = 0 }) {
    console.log(shape, xPos, yPos);
}
function doSomeThing_1(obj) {
    console.log("prop: ", obj.prop);
    // obj.prop = "hello"; // error
}
function visitForBirthday(home) {
    console.log(`Happy brith day: ${home.resident.name}, age: ${home.resident.age}`);
    home.resident.age++;
}
let writeablePerson = {
    name: "CDE",
    age: 20,
};
let readOnlyPerson = writeablePerson;
console.log("age 1: ", readOnlyPerson.age);
// readOnlyPerson.age++; // error
writeablePerson.age = 22;
console.log("age 2: ", readOnlyPerson.age);
const cc_1 = {
    color: "red",
    radius: 42,
};
function draw_1(circle) {
    console.log("color: ", circle.color);
    console.log("radius: ", circle.radius);
}
draw_1({ color: "blue", radius: 10 });
let x_2 = {
    contents: "Hello World",
};
// We could check 'x.contents'
if (typeof x_2.contents === "string") {
    console.log(x_2.contents.toLowerCase());
}
// or we could use a type assertion
console.log(x_2.contents.toLowerCase());
function setContent_1(box, newContent) {
    box.content = newContent;
}
let box_1;
let box_2;
let box_3;
let newContent_1 = {
    content: "aaa",
};
console.log(newContent_1.content);
function setContent_2(box, newContent) {
    box.content = newContent;
}
//-- The Array Type
function doSomething_4(arr) {
    console.log("array first: ", arr[0]);
}
let myArr_4 = ["hi", "you"];
doSomething_4(myArr_4);
doSomething_4(new Array("xin", "chao"));
//-- The ReadonlyArray Type
function doStuff_1(value) {
    const copy = value.slice();
    console.log(`First element array: ${value[0]}`);
    // value.push("aa"); // error
}
function doStuff_2(value) {
    const copy = value.slice();
    console.log(`First element array: ${value[0]}`);
    // value.push("aa"); // error
}
// init ReadonlyArray
const roArr_1 = ["1", "2", "3"];
