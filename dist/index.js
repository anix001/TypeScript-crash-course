"use strict";
//Basic Types
// let id:number = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'hello';
let age = 30;
let ids = [1, 2, 3, 4, 5];
// console.log('Id',id)
//Tuple
let person = [1, 'Anish', true];
//Tuple Array
let employee;
employee = [
    [1, 'anix'],
    [2, 'nabin'],
    [3, 'dklnsn']
];
//unions
let id = 2;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'anish'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//void type func
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'anish'
};
let p = 1;
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register.`;
    }
}
const personObj = new Person(1, 'anix');
// console.log(personObj)
// console.log(personObj.register())
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employeeObj = new Employee(3, 'anix001', 'Frontend Developer');
// console.log(employeeObj.name)
// console.log(employeeObj.register())
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['ani', 'anix', 'anix001']);
numArray.push(11);
strArray.shift('sajan');
