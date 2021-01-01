import Invoice from './classes/Invoice.js';

const invoiceOne = new Invoice('André', 'João', 27.5);

console.log(invoiceOne.payer); // ok
// console.log(invoiceOne.recipient); // error
// console.log(invoiceOne.amount); // error
console.log(invoiceOne.description); // ok
console.log(invoiceOne.anything); // ok
console.log(invoiceOne);
