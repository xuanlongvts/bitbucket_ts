export interface stringFormatOptions {
	fancinessLevel: number;
}

export function doSomeThing(): void;

declare global {
	interface String {
		fancyFormat(opts: stringFormatOptions): string;
	}
}

export {};
