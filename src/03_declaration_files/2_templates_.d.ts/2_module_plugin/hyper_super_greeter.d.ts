import { greeter } from "./super_greeter";

export module "./super_greeter" {
	export interface GreeterFunction {
		hyperGreeter(): void;
	}
}
