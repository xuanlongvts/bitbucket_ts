"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_one_name_1 = require("./type_one_name");
let x = type_one_name_1.Bar.a;
console.log(x.count);
// Again, we’ve used Bar as both a type and a value here.
// Note that we didn’t have to declare the Bar value as being of the Bar type — they’re independent.
