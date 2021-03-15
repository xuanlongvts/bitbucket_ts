// -------------------------------- Introduction
type Horse = {};
type OnlyBoolsAndHorses = {
	[key: string]: boolean | Horse;
};

const conform: OnlyBoolsAndHorses = {
	del: true,
	rodney: false,
};

//-- keyof
type OptionsFlags<Type> = {
	[ProperTy in keyof Type]: boolean;
};
type FeatureFlags = {
	darkMode: () => void;
	newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>;
/*
	type FeatureOptions = {
		darkMode: boolean;
		newUserProfile: boolean;
	}
*/

// -------------------------------- Mapping Modifiers
//-- Removes 'readonly' attributes from a type's properties
type CreateMutable<T> = {
	-readonly [Property in keyof T]: T[Property];
};

type LockAccount = {
	readonly id: string;
	readonly name: string;
};
type UnLockAccount = CreateMutable<LockAccount>;
/*
	type UnLockAccount = {
		id: string;
		name: string;
	}
*/

//-- Removes 'optional' attributes from a type's properties
type Concrete<T> = {
	[Property in keyof T]-?: T[Property];
};
type MaybeUser_1 = {
	id: string;
	name?: string;
	age?: string;
};
type User_1 = Concrete<MaybeUser_1>;
/*
	type User_1 = {
		id: string;
		name: string;
		age: string;
	}
*/

// -------------------------------- Key Remapping via as
type Getters<T> = {
	[Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
};
interface Person_2_2 {
	name: string;
	age: number;
	location: string;
}
type LazyPerson = Getters<Person_2_2>;
/*
	type LazyPerson = {
		getName: () => string;
		getAge: () => number;
		getLocation: () => string;
	};
*/

//-- filter out keys
type RemoveKindField<T> = {
	[K in keyof T as Exclude<K, "kind">]: T[K];
};
interface Circle {
	kind: "circle";
	radius: number;
}
type KindLessCircle = RemoveKindField<Circle>;
/*
	type KindLessCircle = {
		radius: number;
	}
*/

//-- Further Exploration
type ExtracTPii<T> = {
	[Property in keyof T]: T[Property] extends { pii: true } ? true : false;
};
type DbFields = {
	id: { format: "increment" };
	name: { type: string; pii: true };
};
type ObjectsNeedingGDPRDeletion = ExtracTPii<DbFields>;
/*
	type ObjectsNeedingGDPRDeletion = {
		id: false;
		name: true;
	}
*/
