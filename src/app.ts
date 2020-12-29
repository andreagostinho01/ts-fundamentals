/*
  the following piece of code will trigger an error because the anchorEl can be
  a HTMLAnchorElement or null
*/
// const anchorEl = document.querySelector('a');
// console.log(anchorEl.href);

/*
  to avoid the previous situation we need to add an exclamation mark to the end
  of the querySelector statement, so now we are saying to TS that the
  querySelector is going to return something and won't be null
*/
// const anchorEl = document.querySelector('a')!;
// console.log(anchorEl.href);

// we could also use the optional chaining operator
// const anchorEl = document.querySelector('a');
// console.log(anchorEl?.href);

/*
  in another way we can use the 'as' operator to explicitly say that the constant
  will have a known value
*/
const anchorEl = document.querySelector('a') as HTMLAnchorElement;
console.log(anchorEl.href);

const itemType = document.querySelector('#type') as HTMLSelectElement;
console.log(itemType);

const amountField = document.querySelector('#amount') as HTMLInputElement;
console.log(amountField.valueAsNumber);
console.log(typeof amountField.valueAsNumber);
