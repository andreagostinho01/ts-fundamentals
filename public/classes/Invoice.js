export default class Invoice {
    constructor(payer, recipient, amount) {
        this.description = 'This is an invoice';
        this.anything = 'This property is public by default';
        this.payer = payer;
        this.recipient = recipient;
        this.amount = amount;
    }
    format() {
        return `${this.payer} owes $${this.amount} to ${this.recipient}`;
    }
}
