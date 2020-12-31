class Invoice {
  payer: string;
  recipient: string;
  amount: number;

  constructor(payer: string, recipient: string, amount: number) {
    this.payer = payer;
    this.recipient = recipient;
    this.amount = amount;
  }

  format() {
    return `${this.payer} owes $${this.amount} to ${this.recipient}`;
  }
}

const invoiceOne = new Invoice('André', 'João', 27.5);
const invoiceTwo = new Invoice('Daniel', 'André', 60);
console.log(invoiceOne, invoiceTwo);

let invoices: Invoice[] = [];
invoices.push(invoiceOne, invoiceTwo);
console.log(invoices);
