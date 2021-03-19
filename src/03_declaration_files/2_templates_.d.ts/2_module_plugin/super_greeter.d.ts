export interface GreeterFunction {
	(name: string): void;
	(time: number): void;
}

export const greeter: GreeterFunction;
