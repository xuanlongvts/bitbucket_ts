// -------------------------------- Partial<Type>
interface Todo {
	title: string;
	description: string;
}
function updateToto(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return {
		...todo,
		...fieldsToUpdate,
	};
}
const todo_1 = {
	title: "organize desk",
	description: "clear clutter",
};
const todo_2 = updateToto(todo_1, {
	description: "throw out trash",
});

// -------------------------------- Required<Type>
interface Props {
	a?: number;
	b?: number;
}
const obj_2: Props = { a: 5 };
const obj_3: Required<Props> = { a: 5, b: 6 };
// const obj_4: Required<Props> = { a: 7 }; // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.ts(2741)

// -------------------------------- Readonly<Type>
interface Todo_1 {
	title: string;
}
const todo_3: Readonly<Todo_1> = {
	title: "Hi",
};
// todo_3.title = "Hello"; // Cannot assign to 'title' because it is a read-only property.ts(2540)
// This utility is useful for representing assignment expressions that will fail at runtime
declare function freeze<T>(obj: T): Readonly<T>;

// -------------------------------- Record<Keys, Type>
interface CatInfo {
	age: number;
	breed: string;
}
type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 20, breed: "Maine Coon" },
	mordred: { age: 30, breed: "British Shorthair" },
};
cats.boris;

// -------------------------------- Pick<Types, Keys>
interface Todo_2 {
	title: string;
	description: string;
	completed: boolean;
}
type TodoPreview = Pick<Todo_2, "title" | "completed">;
const toto_3: TodoPreview = {
	title: "Clean room",
	completed: false,
};
toto_3.title;

// -------------------------------- Omit<Type, Keys>
interface Todo_3 {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}
type Todo_3_Preview = Omit<Todo_3, "description">;
const todo_3_pre: Todo_3_Preview = {
	title: "clean room",
	completed: false,
	createdAt: 123,
};

type Todo_3_info = Omit<Todo_3, "completed" | "createdAt">;
const toto_3_info: Todo_3_info = {
	title: "Pick up kids",
	description: "Kindergarten closes at 5pm",
};

// -------------------------------- Exclude<Type, ExcludedUnion>
type T_0 = Exclude<"a" | "b" | "c", "a">; // type T_0 = "b" | "c"
type T_1 = Exclude<"a" | "b" | "c", "a" | "b">; // type T_1 = "c"
type T_3 = Exclude<string | number | (() => void), Function>; // type T_3 = string | number

// -------------------------------- Extract<Type, Union>
type T_4 = Extract<"a" | "b" | "c", "a" | "f">; // type T_4 = "a"
type T_5 = Extract<string | number | (() => void), Function>; // type T_5 = () => void

// -------------------------------- Nonnullable<Type>
type T_6 = NonNullable<string | number | undefined>; // type T_6 = string | number
type T_7 = NonNullable<string[] | null | undefined>; // type T_7 = string[]

// -------------------------------- Parameters<Type>
declare function funct_1(arg: { a: number; b: string }): void;
type T_8 = Parameters<() => string>; // type T_8 = []
type T_9 = Parameters<(s: string) => void>; // type T_9 = [s: string]
type T_10 = Parameters<<T>(arg: T) => T>; // type T_10 = [arg: unknown]
type T_11 = Parameters<typeof funct_1>;
type T_12 = Parameters<any>; // type T_12 = unknown[]
type T_13 = Parameters<never>;
// type T_15 = Parameters<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.ts(2344)
// type T_16 = Parameters<Function>; // Type 'Function' does not satisfy the constraint '(...args: any) => any'.

// -------------------------------- ConstructorParameters<Type>
type T_17 = ConstructorParameters<ErrorConstructor>; // type T_17 = [message?: string | undefined]
type T_18 = ConstructorParameters<FunctionConstructor>; // type T_18 = string[]
type T_19 = ConstructorParameters<RegExpConstructor>; // type T_19 = [pattern: string | RegExp, flags?: string | undefined]
type T_20 = ConstructorParameters<any>; // type T_20 = unknown[]
// type T_21 = ConstructorParameters<Function>; // Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.

// -------------------------------- ReturnType<Type>
declare function funct_2(): { a: number; b: number };
type T_22 = ReturnType<() => string>;
type T_23 = ReturnType<(s: string) => void>;
type T_24 = ReturnType<<T>() => T>; // type T_24 = unknown
type T_25 = ReturnType<<T extends U, U extends number[]>() => T>;
type T_26 = ReturnType<typeof funct_2>;
type T_27 = ReturnType<any>;
type T_28 = ReturnType<never>;
// type T_29 = ReturnType<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.ts(2344)
// type T_30 = ReturnType<Function>; // Type 'Function' does not satisfy the constraint '(...args: any) => any'.

// -------------------------------- InstanceType<Type>
class CC_1 {
	a = 0;
	b = 1;
}
type T_31 = InstanceType<typeof CC_1>;
type T_32 = InstanceType<any>;
type T_33 = InstanceType<never>;
// type T_34 = InstanceType<string>; // Type 'string' does not satisfy the constraint 'new (...args: any) => any'.ts(2344)
// type T_35 = InstanceType<Function>; // Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.

// -------------------------------- ThisParameterType<Type>
function toHex(this: Number) {
	return this.toString(16);
}
function numberToString(n: ThisParameterType<typeof toHex>) {
	return toHex.apply(n);
}
console.log(numberToString(202)); // ca

// -------------------------------- OmitThisParameter<Type>
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5); // const fiveToHex: () => string
console.log(fiveToHex());

// -------------------------------- ThisType<Type>
// This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type.
// Note that the--noImplicitThis flag must be enabled to use this utility.
type ObjectDescription<D, M> = {
	data?: D;
	method?: M & ThisType<D & M>;
};
function makeObject<D, M>(desc: ObjectDescription<D, M>): D & M {
	let data: object = desc.data || {};
	let method: object = desc.method || {};

	return {
		...data,
		...method,
	} as D & M;
}
let obj_6 = makeObject({
	data: { x: 0, y: 0 },
	method: {
		moveBy(dx: number, dy: number) {
			this.x += dx;
			this.y += dy;
		},
	},
});
obj_6.x = 10;
obj_6.y = 20;
console.log(obj_6.moveBy(5, 5));
