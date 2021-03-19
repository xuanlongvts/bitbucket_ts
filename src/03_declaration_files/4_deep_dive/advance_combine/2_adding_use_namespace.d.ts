class C {}
namespace C {
	export let xxx: number;
}
let y = C.xxx;

// another way
class CC {}
namespace CC {
	export interface D {}
}
let y: CC.D;

// Finally, we could perform many different merges using namespace declarations.
// This isn’t a particularly realistic example, but shows all sorts of interesting behavior:
namespace X {
	export interface Y {}
	export class Z {}
}
namespace X {
	export var Y: number;
	export namespace Z {
		export class C {}
	}
}
type X = string;
