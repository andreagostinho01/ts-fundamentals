// explicit types
var vehicleModel;
var vehicleBrand = 'The vehicle brand';
var isElectric;
console.log(vehicleBrand);
// explicit types on arrays
var arrayOfStrings = [];
var arrayOfObjects = [];
var arrayOfNumbers = [1, 2, 3];
console.log(arrayOfNumbers);
// union types: used when a variable can have different types
var appVersion; // parentheses are optional
var mixedArray = []; // parentheses are required
appVersion = 'v1.0';
console.log(appVersion);
appVersion = 1.5;
console.log(appVersion);
mixedArray.push('House');
mixedArray.push(2020);
mixedArray.push(true);
mixedArray.push({ name: 'André', age: 19 });
console.log(mixedArray);
// predefined object
var person;
person = {
    name: 'Renan',
    age: 17
};
console.log(person);
