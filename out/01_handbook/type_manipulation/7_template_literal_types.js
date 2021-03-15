"use strict";
const person_1 = makeWatchedObject({
    firstName: "Long",
    lastName: "Le",
    age: 20,
});
person_1.on("firstNamechanged", () => { });
person_1.on("lastNamechanged", () => { });
person_1.on("agechanged", () => { });
