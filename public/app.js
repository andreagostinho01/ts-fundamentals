"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(payer, recipient, amount) {
        this.description = 'This is an invoice';
        this.anything = 'This property is public by default';
        this.payer = payer;
        this.recipient = recipient;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.payer + " owes $" + this.amount + " to " + this.recipient;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('André', 'João', 27.5);
console.log(invoiceOne.payer); // ok
// console.log(invoiceOne.recipient); // error
// console.log(invoiceOne.amount); // error
console.log(invoiceOne.description); // ok
console.log(invoiceOne.anything); // ok
console.log(invoiceOne);
var AnotherClass = /** @class */ (function () {
    /*
      we can also define class properties as constructor parameters
      so we don't need to assign them inside the constructor
    */
    function AnotherClass(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    return AnotherClass;
}());
