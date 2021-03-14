type Person = {
	age: number;
	name: string;
	alive: boolean;
};
type age_1 = Person["age"]; // type age_1 = number
type I1 = Person["age" | "name"]; // type I1 = string | number
type I2 = Person[keyof Person]; // type I2 = string | number | boolean

const myArr_1 = [
	{ name: "Alice", age: 15 },
	{ name: "Bob", age: 23 },
	{ name: "Eve", age: 38 },
];
type Person_1 = typeof myArr_4[number]; // type Person_1 = string
type Age_1 = typeof myArr_1[number]["age"]; // type Age_1 = number
