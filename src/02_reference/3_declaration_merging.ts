// -------------------------------- Merging interfaces
interface Box {
	width: number;
	height: number;
}
interface Box {
	scale: number;
}
let box: Box = {
	width: 1,
	height: 2,
	scale: 3,
};

//--
type Animal_4 = {};
type Dog_4 = {};
type Cat_4 = {};
type Sheep_4 = {};

interface Cloner {
	clone(animal: Animal_4): Animal_4;
}
interface Cloner {
	clone(animal: Sheep_4): Sheep_4;
}
interface Cloner {
	clone(animal: Dog_4): Dog_4;
	clone(animal: Cat_4): Cat_4;
}

// after merge
// interface Cloner {
// 	clone(animal: Dog_4): Dog_4;
// 	clone(animal: Cat_4): Cat_4;
// 	clone(animal: Sheep_4): Sheep_4;
// 	clone(animal: Animal_4): Animal_4;
// }

//--
interface Document {
	createElement(tagName: any): Element;
}
interface Document {
	createElement(tagName: "div"): HTMLDivElement;
	createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
	createElement(tagName: string): HTMLElement;
	createElement(tagName: "canvas"): HTMLCanvasElement;
}
// after merge
// interface Document {
// 	createElement(tagName: "canvas"): HTMLCanvasElement;
// 	createElement(tagName: "div"): HTMLDivElement;
// 	createElement(tagName: "span"): HTMLSpanElement;
// 	createElement(tagName: string): HTMLElement;
// 	createElement(tagName: any): Element;
// }

// -------------------------------- Merging namespaces
namespace Animal_5 {
	export class Zebra {}
}
namespace Animal_5 {
	export interface Legged {
		numberOfLegs: number;
	}
	export class Dog {}
}
// after merge
// namespace Animals {
// 	export interface Legged {
// 		numberOfLegs: number;
// 	}
// 	export class Zebra {}
// 	export class Dog {}
// }

//--
namespace Animal_6 {
	let haveMuscles = false;
	// export let haveMuscles = false;

	export function animalsHaveMuscles() {
		return haveMuscles;
	}
}
namespace Animal_6 {
	export function doAnimalsHaveMuscles() {
		// return haveMuscles; // error; Cannot find name 'haveMuscles'.ts(2304)
	}
}

// -------------------------------- Merging namespaces with class, Function and Enums
namespace Album_2 {
	export class AlbumLabel {}
}
class Album_1 {
	label!: Album_2.AlbumLabel;
}

function builderLabel(name: string): string {
	return builderLabel.prefix + name + builderLabel.suffix;
}
namespace builderLabel {
	export let suffix = "";
	export let prefix = "";
}
console.log(builderLabel("Long"));

enum Color_1 {
	red = 1,
	green = 2,
	blue = 4,
}
namespace Color_1 {
	export function mixColor(colorName: string) {
		if (colorName == "yellow") {
			return Color_1.red + Color_1.green;
		} else if (colorName == "white") {
			return Color_1.red + Color_1.green + Color_1.blue;
		} else if (colorName == "magenta") {
			return Color_1.red + Color_1.blue;
		} else if (colorName == "cyan") {
			return Color_1.green + Color_1.blue;
		}
	}
}
