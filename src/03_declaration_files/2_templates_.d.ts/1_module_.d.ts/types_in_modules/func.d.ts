// export type ArrayMetadata = {
// 	length: number;
// 	firstElement: any | undefined;
// };

// export function getArrayMetadata_1(arr: any[]): ArrayMetadata;

export type ArrayMetadata<T> = {
	length: number;
	firstElement: any | undefined;
};

export function getArrayMetadata_1<T>(arr: T[]): ArrayMetadata<T>;
