// -------------------------------- Numeric enums
enum Direction_1 {
	Up = 1,
	Down,
	Left,
	Right,
}
enum Direction_2 {
	Up,
	Down,
}

//-- not allow
const getSomeValue = () => 11;
enum E_1 {
	A = getSomeValue(),
	// B, // error Enum member must have initializer.ts(1061)
}

// -------------------------------- String enums
enum Direction_3 {
	Up = "Up",
	Down = "Down",
	Lef = "Lef",
	Right = "Right",
}

// -------------------------------- Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
	No = 0,
	Yes = "Yes",
}

// -------------------------------- Computed and constant members
enum E {
	X,
}
// E.X is constant:

enum FileAccess {
	None,
	Read = 1 << 1,
	Write = 1 << 2,
	ReadWrite = Read | Write,
	G = "123".length,
}

// -------------------------------- Union enums and enum member types
enum ShapeKind_1 {
	Circle_1,
	Square_1,
}
interface Circle_1 {
	kind: ShapeKind_1.Circle_1;
	radius: number;
}
interface Square_1 {
	kind: ShapeKind_1.Square_1;
	sideLength: number;
}
let Cir_1: Circle_1 = {
	radius: 10,
	// kind: ShapeKind_1.Square_1, // Type 'ShapeKind_1.Square_1' is not assignable to type 'ShapeKind_1.Circle_1'.ts(2322)
	kind: ShapeKind_1.Circle_1,
};

// -------------------------------- Enum at runtimes
enum E_1 {
	X,
	Y,
	Z,
}
function func_enum_1(obj: { X: E_1 }) {
	return obj.X;
}

// -------------------------------- Enum at compile time
enum LogLevel_1 {
	ERROR,
	WARN,
	INFO,
	DEBUG,
}
type LogLevelStrings = keyof typeof LogLevel_1;

function printImportant_1(key: LogLevelStrings, message: string) {
	const num = LogLevel_1[key];
	if (num < LogLevel_1.WARN) {
		console.log("Log level key is: ", key);
		console.log("Log level value is: ", num);
		console.log("Log level message is: ", message);
	}
}
printImportant_1("ERROR", "This is a message");

//-- reverse mappings
enum Enum_1 {
	A,
	B,
}
let get_a_1 = Enum_1.A; // value is 0;
let nameOf_a_1 = Enum_1[get_a_1]; // value is A;

//-- const enums
const enum Enum_2 {
	A = 1,
	B = A * 2,
}

const enum Direction_4 {
	Up,
	Down,
	Left,
	Right,
}
let direction_4 = [Direction_4.Up, Direction_4.Down, Direction_4.Left, Direction_4.Right];
console.log("direction_4", Direction_4.Up);

// -------------------------------- Ambient enums
declare enum Enum_not_init {
	A = 1,
	B,
	C = 2,
}

// -------------------------------- Objects vs Enums
const enum E_Direction {
	Up,
	Down,
	Left,
	Right,
}
console.log(E_Direction.Up);
function walk_1(dir_1: E_Direction) {}
walk_1(E_Direction.Left);

const O_Direction = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,
} as const;
console.log(O_Direction.Up);

type e_Dir = typeof O_Direction[keyof typeof O_Direction];
function run(dir: e_Dir) {}
run(O_Direction.Right);
