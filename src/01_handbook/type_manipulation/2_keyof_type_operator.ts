type Points_1 = {
	x: number;
	y: number;
};
type P_1 = keyof Points_1;

type Arrayish = {
	[n: number]: unknown;
};
type A_1 = keyof Arrayish;

type Mapish = {
	[k: string]: boolean;
};
type M_1 = keyof Mapish;
