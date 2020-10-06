"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
// types
var number1 = 5; // implicit
var number = 5; // explicit
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// object (explicit)
var person = {
    name: "Bobby Tables",
    age: 30,
    oldrole: [2, "admin"],
};
// object (implicit), with enum (custom type)
var person2 = {
    name: "Bobby Tables",
    age: 30,
    oldrole: [2, "admin"],
    role: Role.ADMIN
};
