function printLabel(labledObj) {
    console.log("labeledObj: ", labledObj.label);
}
var myOjb = { size: 10, label: "Size 10 object" };
printLabel(myOjb);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySquare_1 = createSquare({ colour: "green", width: 8 });
var mySquare_2 = createSquare({ width: 7, opacity: 0.5 });
function createSquare2(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare_3 = createSquare2({ colour: "purple", width: 66 });
var p1 = { x: 5, y: 10 };
// p1.x = 20; // Cannot assign to 'x' because it is a read-only property
var arr = [1, 2, 3, 4];
var ro = arr;
/* error
ro[0] = 10;
ro.push(5);
ro.length = 100;
arr = ro;
*/
arr = ro;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearch_1;
mySearch_1 = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArr;
myArr = ["Bob", "Fred"];
var myStr = myArr[0];
