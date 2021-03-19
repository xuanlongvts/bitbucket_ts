import { Bar } from "./type_one_name";

let x: Bar = Bar.a;
console.log(x.count);

// Again, we’ve used Bar as both a type and a value here.
// Note that we didn’t have to declare the Bar value as being of the Bar type — they’re independent.
