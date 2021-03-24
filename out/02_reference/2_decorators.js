"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// -------------------------------- Decorators and Decorator Factories
function sealed(value) {
    return function (target) {
        // some codes here
    };
}
// -------------------------------- Decorators composition
function first() {
    console.log("first(): factory evaluted");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluted");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class ExampleClass {
    method() {
        console.log("method");
    }
}
__decorate([
    first(),
    second()
], ExampleClass.prototype, "method", null);
// -------------------------------- Class Decorators
function sealed_1(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let BugError = class BugError {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
};
BugError = __decorate([
    sealed_1
], BugError);
const bug = new BugError("hello");
bug.title = "title Bug Error";
bug.type = "type Error Bug";
console.log(bug.title);
//-- Next we have an example of how to override the constructor to set new defaults.
function reportableClassDecorator(constructor_1) {
    return class extends constructor_1 {
        constructor() {
            super(...arguments);
            this.reportingUrl = "http://www....";
        }
    };
}
let BugReport = class BugReport {
    constructor(t) {
        this.type = "report";
        this.title = t;
    }
};
BugReport = __decorate([
    reportableClassDecorator
], BugReport);
const bugReport = new BugReport("Needs dark mode");
console.log(bugReport.title);
console.log(bugReport.type);
// console.log(bugReport.reportingUrl); // Property 'reportingUrl' does not exist on type 'BugReport'.ts(2339)
// -------------------------------- Method Decorators
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter_11 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return `Hi ${this.greeting}`;
    }
}
__decorate([
    enumerable(false)
], Greeter_11.prototype, "greet", null);
// -------------------------------- Accessor Decorators
function configable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
class Points_4 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get X() {
        return this._x;
    }
    get Y() {
        return this._y;
    }
}
__decorate([
    configable(false)
], Points_4.prototype, "X", null);
__decorate([
    configable(true)
], Points_4.prototype, "Y", null);
const initPoints_4 = new Points_4(5, 10);
console.log(initPoints_4.X);
console.log(initPoints_4.Y);
