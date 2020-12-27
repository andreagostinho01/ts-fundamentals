"use strict";
var walk; // we can declare a variable as a function
walk = function () { return console.log("I'm walking"); };
walk();
// default value to function parameter, making it optional
// IMPORTANT: it's a good practice to keep optional parameters at the end
var sum = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return console.log(num1 + num2 + num3);
};
sum(2, 3);
sum(2, 3, 5);
/*
    explicit optional parameter to function, its value defaults to undefined if
    nothing is passed
*/
var sayHello = function (name) {
    if (name)
        console.log("Hello, " + name + "!");
    else
        console.log('Hello, stranger!');
};
sayHello('Mark');
sayHello();
// explicitly define function return type
var multiplication = function (num1, num2) { return num1 * num2; };
console.log(multiplication(6, 7));
