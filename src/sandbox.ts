// function signature
/* 
  before the function is assigned, we can specify its parameters and the type
  of the returned value
*/
let greet: (a: string) => string;

// function parameter name doesn't have to be the same as the signature
greet = (name) => `Hello, ${name}! How's it going?`;

console.log(greet('André'));
