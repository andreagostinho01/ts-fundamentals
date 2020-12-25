// a typed array can only contain elements of the same type
let typedArr = ['Jaú', 'Bauru', 'Bariri'];
//typedArr.push(21); // error
typedArr.push('Bocaina'); // ok
console.log(typedArr);

// however we can still have a type mixed array
const mixedArr = ['Pavê', 18, false, 'Pudim'];
mixedArr.push(12); // ok
mixedArr.push('Sorvete'); // ok
console.log(mixedArr);

// the same works for objects
const myObj = {
  name: 'Fit',
  brand: 'Honda',
  year: 2004,
};

// myObj.year = '2004'; // error
myObj.year = 2008; // ok
console.log(myObj);

// typescript does not allow creating new properties in an object after its declaration
const transaction = {
  date: '23/12/2020',
  value: 150,
};

// transaction.finalBalance = 1000; // error

console.log(transaction);

// otherwise we can add a new prop to the object using the defineProperty function
Object.defineProperty(transaction, 'finalBalance', {
  value: 1000,
  writable: true
});

console.log(transaction);
