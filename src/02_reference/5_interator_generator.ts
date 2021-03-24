// -------------------------------- for .. of statements
let someArr = [1, "string", false];

for (let val of someArr) {
	console.log("val ==>", val); // 1, "string", false
}

let lists_1 = [4, 5, 6];
for (let k in lists_1) {
	console.log("key: ", k); // "0", "1", "2",
}
