import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
import ListTemplate from './classes/ListTemplate.js';
import HasFormatter from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;
let docs: HasFormatter[] = [];

docOne = new Invoice('Thiago', 'Uber ride', 15);
docTwo = new Payment('André', 'Printer maintenance', 80);

docs.push(docOne, docTwo);
console.log(docs);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  doc = type.value === 'invoice'
  ? new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  : new Payment(toFrom.value, details.value, amount.valueAsNumber);

  list.render(doc, type.value, 'end');
  // list.render(doc, type.value, 'start');

  console.log(doc);
});
