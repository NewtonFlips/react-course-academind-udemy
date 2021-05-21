// USE OF VARIABLES
// Always use let and const to declare.
// let is used to declare variable which we expect to change in future during our code execution.
// const is used to declare variables which we expect will not and need not to be changed during code execution.

// ARROW FUNCTIONS
const greet = () => {
  console.log("Hello World");
};

greet();

// If we have only one argument, then we do not need parathesis around the argument.
// If the block of function contain only one statement, then curly braces are also optional and return keyword will be automatically assumed.

const multiplyByTwo = (number) => console.log(number * 2);
multiplyByTwo(4);

// EXPORTS and IMPORTS
// In modern JS, we can write modular code.
// if we want to export all items from a file, we usually say 'export default' <name>
// If we want each of item to be exported from the file seperately, we just write 'export' at the start of that function. In that case we have to exactly refer to them in curly braces while importing them in another file. These are called named exports.

// CLASSES
// Classess are essentially blueprints for objects. They have inheritence
// Objects can have both properties and methods
// classes are syntaxed (ES 7) as below:

class Human {
  gender = "male";

  prinGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Newton";

  printMyName = () => {
    console.log(this.name);
  };
}

const myPerson = new Person();
myPerson.printMyName();
myPerson.prinGender();

// SPREAD and REST OPERATORS
// it is only one operator i.e. '...'
// spread is used to split up array elements or object properties.
// Spread operator
const arr1 = [2, 3, 4];
const arr2 = [...arr1, 5];
console.log(arr2);

const obj = {
  firstName: "Newton",
};

const obj2 = { ...obj, lastName: "Flips" };
console.log(obj2);

// Rest operator is used to merge elements (seperated values into an array). It is used in functions.
const filter = (...args) => {
  console.log(args);
};

filter(2, 3, 4);

// DESTRUCTURING
// it allows to easily extract array elements or object properties in seperate variables.
const arr3 = [1, 2, 3, 4, 5];
const [a, , b] = arr3;
console.log(a, b);

const obj5 = {
  firstName: "Newton",
  lastName: "Flips",
};

const { firstName, lastName } = obj5;
console.log(firstName, lastName);

// Reference and Primitive Types
// When we save a variable with primitive type, and we store that variable in another variable, it will actually copy the vale. However, the same will not happen in case of objects and arrays as these are referenced values. Hence, change in any value of any of the variable will result in change in respect value in another variable as these are just memory references.
// To make actual copy of arrays and objects, use spread operators
