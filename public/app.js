"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(payer, recipient, amount) {
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
var invoiceTwo = new Invoice('Daniel', 'André', 60);
console.log(invoiceOne, invoiceTwo);
var invoices = [];
invoices.push(invoiceOne, invoiceTwo);
console.log(invoices);
