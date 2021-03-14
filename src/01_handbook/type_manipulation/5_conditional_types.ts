interface Animal_2 {
	live(): void;
}
interface Dog_2 extends Animal_2 {
	woof(): void;
}
type exam_1 = Dog_2 extends Animal_2 ? number : string;
type exam_2 = RegExp extends Animal_2 ? number : string;

//--
interface IdLabel {
	id: number;
}
interface NameLabel {
	name: string;
}
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
	throw "UnImplement";
}

//--
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
function createLabel_1<T extends number | string>(idOrName: T): NameOrId<T> {
	throw "UnImplement";
}
let a_1 = createLabel_1("typescript");
let a_2 = createLabel_1(10);
let a_3 = createLabel_1(Math.random() > 0.5 ? "hello" : 40);

//-- Conditional Type Constrains
// type MessageOf_0<T> = T["message"]; // error
type MessageOf<T extends { message: unknown }> = T["message"];
interface Email_1 {
	message: string;
}
interface Dog_3 {
	bark(): void;
}
type EmailMessageContents = MessageOf<Email_1>;

type MessageOf_1<T> = T extends { message: unknown } ? T["message"] : never;
type EmailMessageContents_1 = MessageOf_1<Email_1>;
type DogMessageContents = MessageOf_1<Dog_3>;

//--
type Flatten<T> = T extends any[] ? T[number] : T;
type str = Flatten<string[]>;
type num = Flatten<number>;

// -------------------------------- Inferring within conditional types
type Flatten_1<Type> = Type extends Array<infer Item> ? Item : Type;

type GetReturnType_1<T> = T extends (...args: never[]) => infer Return ? Return : never;
type Num_1 = GetReturnType_1<() => number>;
type Str_1 = GetReturnType_1<(x: string) => string>;
type Boo_1 = GetReturnType_1<(a: boolean, b: boolean) => boolean[]>;

//-- The same overloaded function
declare function foo_1(x: string): string;
declare function foo_1(x: number): number;
declare function foo_1(x: string | number): string | number;
type type_return_1 = ReturnType<typeof foo_1>; // type type_return_1 = string | number

// -------------------------------- Distributive Conditional types
type ToArray_1<T> = T extends any ? T[] : never;
type StrArrOrNumArr = ToArray_1<string | number>; // type StrArrOrNumArr = string[] | number[]

type ToArraryNonDist<T> = [T] extends [any] ? T[] : never;
type StrOrNumArr = ToArraryNonDist<string | number>; // type StrOrNumArr = (string | number)[]
