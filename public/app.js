"use strict";
/*
  Tuples work similar to arrays
  The main difference is that a tuple doesn't allow you to change the element
  type
*/
let tupleExample = ['January', 2021, true];
tupleExample[0] = 'February'; // ok
// tupleExample[0] = 22; // error
console.log(tupleExample);
