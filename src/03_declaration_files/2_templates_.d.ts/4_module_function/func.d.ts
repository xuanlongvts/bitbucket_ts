export as namespace myFuncLib;

declare namespace Greeter {
	export interface LengthReturnType {
		width: number;
		height: number;
	}

	export interface NameReturnType {
		firstName: string;
		lastName: string;
	}

	export const defaultName: string;
	export let defaultLength: number;
}

declare function GreeterFunc(name: string): Greeter.NameReturnType;
declare function GreeterFunc(length: number): Greeter.LengthReturnType;

export = GreeterFunc;
