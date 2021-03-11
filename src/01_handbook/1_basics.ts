// --------------------------------	Explicit Types
function greet(person: string, date: Date) {
	console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Long Le", new Date());
