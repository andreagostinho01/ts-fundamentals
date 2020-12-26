// explicit types
let vehicleModel: string;
let vehicleBrand: string = 'The vehicle brand';
let isElectric: boolean;

console.log(vehicleBrand);

// explicit types on arrays
let arrayOfStrings: string[] = [];
let arrayOfObjects: object[] = [];
let arrayOfNumbers: number[] = [1, 2, 3];

console.log(arrayOfNumbers);

// union types: used when a variable can have different types
let appVersion: string|number; // parentheses are optional
let mixedArray: (string|number|boolean|object)[] = []; // parentheses are required

appVersion = 'v1.0';
console.log(appVersion);

appVersion = 1.5;
console.log(appVersion);

mixedArray.push('House');
mixedArray.push(2020);
mixedArray.push(true);
mixedArray.push({ name: 'André', age: 19, });

console.log(mixedArray);

// predefined object
let person: {
    name: string,
    age: number,
};

person = {
    name: 'Renan',
    age: 17,
};

console.log(person);
