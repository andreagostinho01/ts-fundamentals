"use strict";
// function signature
/*
  before the function is assigned, we can specify its parameters and the type
  of the returned value
*/
var greet;
// function parameter name doesn't have to be the same as the signature
greet = function (name) { return "Hello, " + name + "! How's it going?"; };
console.log(greet('André'));
