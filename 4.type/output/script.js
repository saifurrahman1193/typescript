"use strict";
let person;
person = 34;
console.log(person);
person = "saifur"; // can change type
console.log(person);
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4));
let arr = [0, '']; // only can add numbers, string 
arr.push(1);
// arr.push({"a": 1}) // can't add object
// arr.push(true) // can't add boolean
console.log(arr);
let obj = {
    name: 'saifur',
    profession: 'software development',
};
// obj.country = 'bangladesh'; // Property 'country' does not exist on type '{ name: string; profession: string; }'
console.log('=============explicit============');
let a;
let b;
let c;
// a = 1 // Type 'number' is not assignable to type 'string'
let arr_number = [];
let arr_string = [];
arr_number.push(1);
// arr_number.push('1')  // Argument of type 'string' is not assignable to parameter of type 'number'
let arr_mixed = [];
arr_mixed.push(1);
arr_mixed.push('1');
let a1;
a1 = '1';
a1 = 1;
console.log(a1);
let obj1;
obj1 = {
    name: 'saifur',
    profession: "software Developer"
};
let obj2;
obj2 = []; // array is also an object
let var_any1;
let var_any2;
var_any2 = "1";
var_any2 = 1;
let var_any_arr = [];
var_any_arr.push(1);
var_any_arr.push('Saifur');
console.log(var_any_arr);
let var_any_obj;
var_any_obj = {
    name: "saifur",
    profession: "software"
};
console.log('=============function============');
let func;
// func = 1;  // Type 'number' is not assignable to type 'Function'
func = () => {
    return 5;
};
let func2;
func2 = (firstname, lastname) => {
    return `My name is : ${firstname} ${lastname}`;
};
console.log(func2('saifur', 'rahman'));
let func3;
func3 = (firstname, lastname) => {
    // return 5;  // Type 'number' is not assignable to type 'string'
    return `My name is : ${firstname} ${lastname}`;
};
console.log(func3('saifur', 'rahman'));
