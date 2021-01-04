import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
let docOne;
let docTwo;
let docs = [];
docOne = new Invoice('Thiago', 'Uber ride', 15);
docTwo = new Payment('André', 'Printer maintenance', 80);
docs.push(docOne, docTwo);
console.log(docs);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    doc = type.value === 'invoice'
        ? new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        : new Payment(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});
