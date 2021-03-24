"use strict";
function updateToto(todo, fieldsToUpdate) {
    return {
        ...todo,
        ...fieldsToUpdate,
    };
}
const todo_1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo_2 = updateToto(todo_1, {
    description: "throw out trash",
});
const obj_2 = { a: 5 };
const obj_3 = { a: 5, b: 6 };
const todo_3 = {
    title: "Hi",
};
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 20, breed: "Maine Coon" },
    mordred: { age: 30, breed: "British Shorthair" },
};
cats.boris;
const toto_3 = {
    title: "Clean room",
    completed: false,
};
toto_3.title;
const todo_3_pre = {
    title: "clean room",
    completed: false,
    createdAt: 123,
};
const toto_3_info = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
};
// type T_29 = ReturnType<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.ts(2344)
// type T_30 = ReturnType<Function>; // Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// -------------------------------- InstanceType<Type>
class CC_1 {
    constructor() {
        this.a = 0;
        this.b = 1;
    }
}
// type T_34 = InstanceType<string>; // Type 'string' does not satisfy the constraint 'new (...args: any) => any'.ts(2344)
// type T_35 = InstanceType<Function>; // Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
// -------------------------------- ThisParameterType<Type>
function toHex() {
    return this.toString(16);
}
function numberToString(n) {
    return toHex.apply(n);
}
console.log(numberToString(202)); // ca
// -------------------------------- OmitThisParameter<Type>
const fiveToHex = toHex.bind(5); // const fiveToHex: () => string
console.log(fiveToHex());
function makeObject(desc) {
    let data = desc.data || {};
    let method = desc.method || {};
    return {
        ...data,
        ...method,
    };
}
let obj_6 = makeObject({
    data: { x: 0, y: 0 },
    method: {
        moveBy(dx, dy) {
            this.x += dx;
            this.y += dy;
        },
    },
});
obj_6.x = 10;
obj_6.y = 20;
console.log(obj_6.moveBy(5, 5));
