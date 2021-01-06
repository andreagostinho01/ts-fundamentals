function addUUID(obj: object) {
  const uuid = 'd97a4534-1cd0-40b5-80aa-b2a1b868bf0b';
  return { uuid, ...obj };
}

const userWithUUID = addUUID({ name: 'André', age: 19 });
console.log(userWithUUID);

/* 
  the next line throws an error because TS can't see there's a name property;
  to solve this we need to use Generics;
  Generics referece: https://www.typescriptlang.org/docs/handbook/generics.html
*/
// console.log(userWithUUID.name); // error

// passed parameter must be an object
function addUUIDAgain <T extends object> (obj: T) {
  const uuid = '4831461a-2445-40a8-9cbb-9f1706aeb09c';
  return { uuid, ...obj };
}

const anotherUserWithUUID = addUUIDAgain({ name: 'Fernando', age: 35 });
console.log(anotherUserWithUUID);
console.log(anotherUserWithUUID.name);

console.log('==================================');

function logCity <T extends { city: string }> (city: T) {
  console.log(city);
  return true;
}

logCity({ city: 'Brotas' });
logCity({ city: 'Campinas', state: 'São Paulo' });

interface Food<T> {
  name: string,
  data: T
}

const hotDog: Food<string> = {
  name: 'Hot dog',
  data: 'some information',
};

const pizza: Food<object> = {
  name: 'Pizza',
  data: {
    ingredients: ['cheese', 'pepperoni', 'tomato sauce'],
    price: 30
  }
};

console.log(hotDog);
console.log(pizza);
