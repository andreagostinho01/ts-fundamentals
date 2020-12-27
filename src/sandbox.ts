let walk: Function; // we can declare a variable as a function

walk = () => console.log("I'm walking");
walk();

// default value to function parameter, making it optional
// IMPORTANT: it's a good practice to keep optional parameters at the end
const sum = (num1: number, num2: number, num3: number = 0) => 
    console.log(num1 + num2 + num3);

sum(2, 3);
sum(2, 3, 5);

/* 
    explicit optional parameter to function, its value defaults to undefined if 
    nothing is passed
*/
const sayHello = (name?: string) => {
    if (name)
        console.log(`Hello, ${name}!`);
    else
        console.log('Hello, stranger!');
}

sayHello('Mark');
sayHello();

// explicitly define function return type
const multiplication = (num1: number, num2: number): number => num1 * num2;

console.log(multiplication(6, 7));
