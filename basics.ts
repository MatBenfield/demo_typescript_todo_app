import { EnumType } from "typescript";

function add(n1:number, n2:number){
    return n1 + n2;
}

// types
const number1 = 5; // implicit
const number: number = 5 // explicit
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

enum Role { ADMIN, READ_ONLY, AUTHOR };

// object (explicit)
const person: {
    name: string;
    age: number;
    oldrole: [number, string],
} = {
    name: "Bobby Tables",
    age: 30,
    oldrole: [2, "admin"],
}

// object (implicit), with enum (custom type)
const person2 = {
    name: "Bobby Tables",
    age: 30,
    oldrole: [2, "admin"],
    role: Role.ADMIN
}