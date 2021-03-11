"use strict";
// --------------------------------	Explicit Types
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Long Le", new Date());
