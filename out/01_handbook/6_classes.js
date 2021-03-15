"use strict";
// -------------------------------- Class Members
class Point_1 {
}
const pt_1 = new Point_1();
pt_1.x = 1;
pt_1.y = 2;
class Point_2 {
    constructor() {
        this.x = 2;
        this.y = 3;
    }
}
const pt_2 = new Point_2();
console.log(`x = ${pt_2.x}, y = ${pt_2.y}`);
class GoodGreeter {
    constructor() {
        this.name = "hi";
    }
}
//-- readonly
class Greeter_1 {
    constructor(otherName) {
        this.name = "hi";
        if (otherName) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = "not OK";
        console.log("error");
    }
}
const gree_1 = new Greeter_1();
// gree_1.name = "hello";
//-- constructor
class Point_3 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point_4 {
    constructor(xs, y) { }
}
//-- super calls
class Base_1 {
    constructor() {
        this.k = 4;
    }
}
class Derived_1 extends Base_1 {
    constructor() {
        super();
        console.log(this.k);
    }
}
//-- method
let z_1 = 5;
class Point_5 {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.z_1 = "hi";
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
        console.log("z_1: ", z_1);
        this.z_1 = "hello";
        // z_1 = "hello"; // This is trying to modify 'x' from line 71, not the class property
    }
}
//-- getters / setters
class C_1 {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(val) {
        this._length = val;
    }
}
const getLen = new C_1();
getLen.length = 5;
//-- Index Signatures
class MyClass_1 {
    check(s) {
        return this[s];
    }
}
class Sonar {
    ping() {
        console.log("Sonar: Ping");
    }
}
class Ball {
    // pong() {
    // 	console.log("Ball pong");
    // }
    ping() {
        console.log("Ball ping");
    }
}
class NameChecker {
    check(str) {
        return str.toLocaleLowerCase() === "ok";
    }
}
class B_1 {
    constructor() {
        this.x = 10;
    }
}
const getB_1 = new B_1();
// getB_1.y = 10; // Property 'y' does not exist on type 'B_1'.ts(2339)
//-- extends clauses
class Animal_1 {
    move() {
        console.log("Moving along");
    }
}
class Dog_1 extends Animal_1 {
    woof(time) {
        for (let i = 0; i < time; i++) {
            console.log("woof");
        }
    }
}
const getDog_1 = new Dog_1();
getDog_1.move();
getDog_1.woof(5);
//-- overriding methods
class Base_2 {
    greet() {
        console.log("Hello world");
    }
}
class Derived_2 extends Base_2 {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hi, ${name.toLocaleUpperCase()}`);
        }
    }
}
const getDer_2 = new Derived_2();
getDer_2.greet();
getDer_2.greet("Long Le");
const getBas_2 = getDer_2;
getBas_2.greet();
// getBas_2.greet("aa"); // error Expected 0 arguments, but got 1.ts(2554)
//-- initialization order
class Base_3 {
    constructor() {
        this.name = "Base_3";
        console.log(`My name is ${this.name}`);
    }
}
class Derived_3 extends Base_3 {
    constructor() {
        super(...arguments);
        this.name = "Derived_3";
    }
}
const getDer_3 = new Derived_3();
console.log(getDer_3.name);
/*
    "My name is Base_3"
    "Derived_3"
*/
//-- inheriting Built-in Types
class MsgError extends Error {
    constructor(m) {
        super(m);
    }
    sayErr() {
        return `Hi ${this.message}`;
    }
}
const getMsgErr = new MsgError("Loi 404");
console.log(getMsgErr.sayErr());
// -------------------------------- Member Visibility
//-- public, protected
class Greeter_2 {
    greet() {
        console.log("Greeter_2 greet");
    }
    getName() {
        return "get Name";
    }
}
const getGree_2 = new Greeter_2();
getGree_2.greet();
class SpecialGreeter_1 extends Greeter_2 {
    howdy() {
        console.log("howdy, ", this.getName());
    }
}
const getSpe_1 = new SpecialGreeter_1();
getSpe_1.greet();
getSpe_1.howdy();
// getSpe_1.getName(); // error
//-- Expose of protected members
class Base_4 {
    constructor() {
        this.m = 10;
    }
}
class Derived_4 extends Base_4 {
    constructor() {
        super(...arguments);
        this.m = 15;
    }
}
const getDer_4 = new Derived_4();
console.log("getDer_4: ", getDer_4.m);
//-- Cross-hierarchy protected access
class Base_5 {
    constructor() {
        this.x = 1;
    }
}
class Derived_5 extends Base_5 {
    constructor() {
        super(...arguments);
        this.x = 2;
    }
}
class Derived_6 extends Base_5 {
    fnc_1(other) {
        other.x = 3;
    }
    fnc_2(other) {
        // other.x = 4; // Property 'x' is protected and only accessible through an instance of class 'Derived_6'.ts(2446)
    }
}
//-- private
class Base_6 {
    constructor() {
        this.x = 10;
    }
}
const getBase_6 = new Base_6();
// getBase_6.x; // Property 'x' is private and only accessible within class 'Base_6'.ts(2341)
class Dervied_7 extends Base_6 {
    showX() {
        // console.log(this.x); // Property 'x' is private and only accessible within class 'Base_6'.ts(2341)
    }
}
//-- Cross-instance private access
class A_3 {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        return other.x === this.x;
    }
}
// -------------------------------- Static Members
class MyClass_2 {
    static printX() {
        console.log("in 1 x: ", MyClass_2.x);
        console.log("in 2 x: ", this.x);
    }
}
MyClass_2.x = 0;
console.log("out x: ", MyClass_2.x);
MyClass_2.printX();
class MyClass_3 {
}
MyClass_3.x = 5;
// console.log("MyClass_3: ", MyClass_3.x); // Property 'x' is private and only accessible within class 'MyClass_3'.ts(2341)
//-- static inherited
class Base_8 {
    static getGreeting() {
        return "Hello world";
    }
}
class Derived_8 extends Base_8 {
    constructor() {
        super(...arguments);
        this.myGreeting = Derived_8.getGreeting();
    }
}
const getDer_8 = new Derived_8();
console.log(getDer_8.myGreeting);
//-- Special static name
class S_1 {
}
// static name = 10; // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S_1'.ts(2699)
S_1.name_1 = 10;
console.log(S_1.name_1);
