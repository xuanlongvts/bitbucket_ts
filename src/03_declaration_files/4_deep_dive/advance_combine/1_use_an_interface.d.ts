interface foo {
	x: number;
}
interface foo {
	y: number;
}
let foo_var: foo;

console.log(foo_var.x + foo_var.y);

// This also works with classes:
class Foo_1 {
	x: number;
}
interface Foo_1 {
	y: number;
}
let foo1_var: Foo_1;
console.log(foo1_var.x + foo1_var.y);
