export default class Invoice {
    // properties are public by default, but we can change it
    public payer: string;
    private recipient: string;
    protected amount: number;
    readonly description: string = 'This is an invoice';
    anything: any = 'This property is public by default';

    constructor(payer: string, recipient: string, amount: number) {
        this.payer = payer;
        this.recipient = recipient;
        this.amount = amount;
    }

    format() {
        return `${this.payer} owes $${this.amount} to ${this.recipient}`;
    }
}
