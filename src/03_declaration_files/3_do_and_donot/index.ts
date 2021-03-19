// -------------------------------- Return types of callbacks
// wrong
function func_type_1(x: () => any) {
	x();
}
// right
function func_type_2(x: () => void) {
	x();
}
function func_type_3(x: () => void) {
	var k = x();
	// k.someThingElse(); // error
}
