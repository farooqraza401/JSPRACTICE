//console.log("Farooq");

//----------coderdost Assignment From github.com/coderdost

//bind()
//push()
//pop()

//slice()
//slice() method is used to extract a portion of an array or string without modifying the original array or string. It returns a shallow copy of the selected portion.

//splice()
//map()
//filter()
//includes()
//lastIndexOf()
//indexOf()
//concat();
//charAt()
//toUpperCase()
//toLowerCase()
//Math.round()
//Math.random()
//Math.trunc()
//Math.sqrt()

// Chapter 1 (Data Types)
//1.1  create a code to check difference between null and undefined data type
//Also check their type using typeOf

//Soln-

let x; // undefined bcz not initialize
let y = null; // clearly or explicitly set to null

if (x === null) {
  //console.log("x is null");
} else if (x === undefined) {
  //console.log("x is undefined");
}

if (y === null) {
  //console.log("y is null");
} else if (y === undefined) {
  //console.log("y is undefined");
}

//console.log("type of x ",typeof x);  // undefined
//console.log("type of y ",typeof y);  // object
//---------------------------------------------

//1.2: Which type of variables (var, let or const) must be initialized at the time of declaration?

// soln-
//const
// Must be initialized at the time of declaration.
//This is because a const variable cannot be reassigned after it's declared, and it must have an initial value.
//---------------------------------------------

//1.3: Guess the Output and Explain Why?
//[From video lecture 1.5]
let languages = "java javaScript python cSharp";

let r = languages.lastIndexOf("r");
//console.log(r)

let re = languages.indexOf("v");
//console.log(re);

//---------------------------------------------

//1.4: Guess the Output and Explain Why?
// [From video lecture 1.8]
let strr = "Hello programmer";

let newStr = Number(strr);

//console.log(newStr);
//---------------------------------------------

//1.5: Guess the Output and Explain Why?

let x1 = 34;
let x2 = "34";

let res = x1 !== x2; // true

let res2 = x1 != x2; // false

//console.log(res,res2);
//---------------------------------------------

//1.6: Guess the Output and explain Why?
let str = "Hello Programmers";

let resul = str.includes("r");

//console.log(resul); // return true
//---------------------------------------------

//1.7: Guess the Output and explain Why?

let num1 = 2;

let num2 = 5;

let result = num1 ** num2 * 2;
//console.log(result); // return 64
//---------------------------------------------

//1.8: Guess the Output and Explain Why?

let arr1 = [1, 2, 4, 5];

let arr2 = [6, 5, 8, 0];

let rs = arr1.concat(arr2);
//console.log(rs); //[1,2,4,5,6,5,8,0]

let newarr1 = [1, 2, 3, 5, 8];

let newarr2 = [4, 7, 9];

//console.log(newarr1,newarr2); // [ 1, 2, 3, 5, 8 ] [ 4, 7, 9 ]

//console.log(newarr1.concat(newarr2)); //return [1,2,3,5,8,4,7,9]
//-----------------------------------------------

//1.9: Guess the Output and Explain Why?

let a = 5;
let b = 7;
let c = 8;

let resu = a < b > c;

//console.log(resu); // return false

function divisible(a, b) {
  return console.log(a % b == 0);
}

//divisible(10,5) // true
//console.log(divisible(10,6)); // true

//-----------------------------------------------

//1.10: If your State is split into four equal parts such that in each part there are 1/4 number of people live.
//You have to find how many people would live in each part? which operators will you use ?

//[From video lecture 1.6]

let totalPopulation = 20000;

let prtPratPopulation = totalPopulation / 4;

//console.log(prtPratPopulation);
//------------------------------------------------

// Chapter 2 (Control Flow/Conditional)

// 2.1: Guess the Output And Explain Why?

// let i = 4;

// for (let j = 0; i < 10; i++) {
//   if (j === 1 || i === 6) {
//     continue;
//   } else {
//     console.log(i, j);

//     if (i === 7) {
//       break;
//     }
//   }
// }
//------------------------------------------------
//2.2: Guess the Output and Explain Why?

// let i = 0;

// for (i; i < 5; i++) {
//   console.log(i);
// }
//------------------------------------------------
//2.3: Write a simple Program in which You have to print first 10 numbers in descending order (10...1)?

// for(let  i=1; i<11; i++){
//     console.log(i);

// }

// for(i=10; i>=1; i--){
//     console.log(i);

// }
//------------------------------------------------

//2.4: Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food.

//Write an if/else if statement to help john figure out Your country is right for him?

//[From video lecture 2.4]

let spanishFood = true;
let englishFood = false;
let spokenEnglish = true;
let population = 7000000;

if (spokenEnglish && population < 10000000 && (spanishFood || englishFood)) {
  //console.log("This country fits John's criteria!");
} else {
  //console.log("This country does not fit John's criteria.");
}
//=================================================
//2.5: Guess the Output And Explain Why?

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }

//   console.log(i);
//-------------------------------------------------

//2.6: use nested-if statement to check your age>18
//than check your height height > 5.10.
//If both true show any message(I can sit in exam) in the console?

let age = 20;
let height = 5.1;

if (age > 18) {
  if ((height = 5.1)) {
    //console.log("You are aligible to sit in the exam");
  }
}
//-------------------------------------------------

//2.7: Create two variables grade and passingYear.Check if your grade == "A" and passingYear < 2020 with the help of ternary operator(Not allowed to use any logical operator).
//If both condition true print on console Qualify. Otherwise Fail

// Ex
let personAge = 17;

let rss = (personAge = 18 ? "QUALIFY" : "FAIL");
//console.log(rss);

let grade = "A";
let passingYear = 2021;

let resultt =
  grade == "A" ? (passingYear < 2020 ? "Qualify" : "Fail") : "passingYearIssue";
//let rssssss = age > 18 ? "Quallified" : "Not qualified"
//console.log(resultt);
//-------------------------------------------------

// Chapter 3 (Functions)

//3.1: Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place.
//Based on this input function should return a String with this format.

function describeYourState(Population, traditionalFood, historicalPlace) {
  //console.log(`My state population is ${Population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}` )
}

describeYourState(700000, "Fish", "Taj Mahal");
//console.log(state);

//3.2: Create a function expression which does the exact same thing as defined in Question 1

let describeState = function (Population, traditionalFood, historicalPlace) {
  console.log(
    `My state population is ${Population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}`
  );
};

//describeState(700000,'Fish','Taj Mahal')

//------------------------------------------------
//3.3: Create function addition which takes two numbers as an argument And return the result of sum of two numbers
let func = function addTwoNumbers(a, b) {
  return console.log(a + b);
};

//func(10,3) // 13
//let ADD = func(10, 10);
//console.log(ADD); // 20

//-------------------------------------------------
let fu = function addnum(a1 = 1, a2 = 3) {
  return a1 + a2;
};

let result1 = fu();
//console.log(result1);

//  Write a program that the number is divisible so return true otherwise false.
let fun = function (a, b) {
  return a % b == 0;
};

let resd = fun(10, 5);
//console.log(resd);
//-------------------------------------------------

//Object Exaple
// Here name,age and city are object's properties and
// Farooq,23,xyz are the values of the property

let P1 = {
  name: "Farooq",
  age: 23,
  city: "xyz",
};

// Accessing Object properties

//console.log(P1["name"]);
//console.log(P1.name);
//3.4 Identify which type of value passed below into the function greet(). What will be the return value of greet ?
let person = {
  name: "john",
  age: 25,
};

function greet() {
  person.name = `Mr ${person.name}`;

  return `Welcome ${person.name}`;
}

let greeting = greet();
//console.log(greeting);

// 3.5: Create higher order function named as transformer
//which take string and firstUpperCaseWord function as an arguments.
//firstUpperCaseWord is function which make first word UpperCase from a given String.

// let UpperCase = function(str){
//     return str.toUpperCase();

// }

// let transformer = function(str,fun){
//     return fun(str)
// }

// console.log(transformer("hello",UpperCase));

// 3.6: create function which will display Your name after every 5 seconds

// setInterval()Example
// let myname = () =>{
//     console.log("Farooq")   // wrong

// },5000

//-------------------

//setInterval(myname,5000)

// let myname = function(){
//     console.log("Farooq");

// }
//setInterval(myname,5000)

// setInterval(function myname(){
//     console.log("Farooq");

// },7000)

// function myname(){
//     console.log("Farooq");

// }

//setInterval(myname,5000)

//setTimeout() Example

// function myname(){
//     console.log("Farooq");

// }
//setTimeout(myname,3000)

// setTimeout(function myname(){
//     console.log("Farooq");

// },5000)
//-----------------------------------------------
//3.7: Guess the Output And Explain Why?

let arrowFunction = (name = "coders") => {
  return `Welcom! ${name}`; // without return keyword arrowFunction return undefined
};
//console.log(arrowFunction());
//------------------------------------------------

//3.8: Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.

function areaOftriangle(a, b, c) {
  // Calculate the semi-perimeter (s)
  let s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

// Example usage with sides 5, 6, and 7
let area = areaOftriangle(5, 6, 7);
//console.log("The area of the triangle is: " + area.toFixed(2)); // Output rounded to 2 decimal places
//-------------------------------------------------

// 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.

// function capitalizeWords(str) {
//     // Split the string into an array of words
//     let words = str.split(' ');

//     // Loop through each word and capitalize the first letter
//     let capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });

//     // Join the capitalized words back into a single string
//     return capitalizedWords.join(' ');
// }

// // Example usage
// let resultz = capitalizeWords("hello world, welcome to javascript programming!");
// console.log(resultz);

function capitalizeWords(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Loop through each word and capitalize the first letter
  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(" ");
}

// Example usage
let resultz = capitalizeWords(
  "hello world, welcome to javascript programming!"
);
//console.log(resultz);

//------------------------------

// splice() : Mutating method
//used to add, remove, or replace elements in an array by modifying the original array.
//Unlike slice(), which does not modify the original array, splice() directly changes the array.

//splice() is a versatile method used for removing, adding, and replacing elements in an array.
//It mutates the original array and can also return the removed elements if any.
//It's especially useful when you need to alter the contents of an array directly.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarray = array.splice(2);
//console.log(newarray);

//console.log(array);
//--------------------------------------------------

//Chapter 4 (Objects)

//Note
// The Math.round() is used to round a number to the nearest integer.
//It rounds up if the fractional part is 0.5 or greater and rounds down if it’s less than 0.5.
//round()

//Syntax:

//Math.round();
//he Math.random()  generates a pseudo-random floating-point number
//between 0 (inclusive) and 1 (exclusive),
//meaning the result will always be greater than or equal to 0, but less than 1.

//4.1: Guess the Output And Explain ?
//console.log(Math.round(Math.random() * 10));

//4.2: Create an object called country for a country of your choice,
//containing properties name , capital, language, population and neighbors

//1.Increase the country population by two million using dot notation.
//2.Decrease the country population by one million using bracket notation.
//3.Make language value in Uppercase.

let country = {
  name: "India",
  capital: "NewDelhi",
  lanaguage: "Hindi",
  population: 125, // in millions
  neighbours: ["Pak", "Bangladesh", "afghanistan", "sri Lank"],
};

// Increase the population by two million using dot notation
let popIncrese = (country.population += 2);

// Decrease the population by one million using bracket notation
let popIDecrease = (country["population"] -= 1);

let lan = country.lanaguage.toUpperCase();

//console.log("Increase country population by two millions :", popIncrese);
//console.log("Decrease country population by one million :", popIDecrease);
//console.log("country lang is in Upper :", lan);
//-----------------------------------------

//4.3: Guess the Output and explain Why?

let car = {
  color: "Blue",

  model: 2021,

  company: "Toyota",
};

let carColor = "Blue";

//console.log(car[carColor]); //undefined

//console.log(car.carColor); //undefined
//----------------------------------------

let car1 = {
  color: "Blue",
  model: 2021,
  copmpany: "Toyota",
};

let carColor1 = car1.color; // dot notation
let carColor2 = car1["color"]; // bracket notation

//console.log(carColor1); // Blue
//console.log(carColor2); // Blue

//---------------------------------------

//4.4: Create a method describeCar inside car object in which you have to print like this in console using template literals
//     Company of my car is ** . It color is And Model of my car is __**
let car3 = {
  color: "Blue",
  model: 2021,
  company: "Toyota",
  describeCar() {
    return `Company of my car is ${this.company} . It color is ${this.color} And Model of my car is ${this.model}`;
  },
};

//console.log(car3.describeCar());

//4.5: Generate random numbers between 0 and 10 using trunc method of MATH object

// trunc()
// The Math.trunc() method removes the decimal part of a number

function getrandomNumer() {
  return Math.trunc(Math.random() * 11); //Generate random numbers between 0 and 10
}
//console.log(getrandomNumer());

//without function

let randomNumber = Math.trunc(Math.random() * 11); //Generate random numbers between 0 and 10
//console.log(randomNumber);

//4.6: Guess the Output and Explain Why?

// with arrow function which use as callback

//forEach()
//forEach() is used to iterate over each element of an array
//and execute a provided function once for each array element

let arr = [1, 2, 3, 4];

arr.forEach((elem) => {
  if (elem == 1) {
    //continue;  // not allowed
  }

  //console.log(elem);
});

arr.forEach((x) =>{
  //console.log(x);
  
})

//provided code contains an issue because the continue statement
//is not allowed in the context of an arrow function (or any function)
//that is being passed to forEach().
//The continue statement can only be used within loops like
// for, while, or do...while, but not within the callback function of forEach().

// with normal function which use as callback
let Numarray = [1, 24, 5, 6, 7];

Numarray.forEach(function (element) {
  //console.log(element);
});

// 4.7: Guess the Output And explain Why?

// Important Note: if there is any error, How we can solve that error?

let airplane = {
  flightName: "fly india",

  atacode: "FI",

  ratings: 4.9,

  book(passenger, flightNum) {
    console.log(
      `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
    );
  },
};

//let bookMethod = book.call(airplane)

let bookMethod = airplane.book.bind(airplane); // with bind()

//bookMethod('john', 8754);

//Another Example-

// Using bind() to Set this

const person1 = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetPerson = person1.greet.bind(person1); //Here, person.greet.bind(person) creates a new function where this is bound to person, so when we call greetPerson(), it correctly uses the name from the person object.
//greetPerson(); // Output: Hello, my name is John

//4.8: Guess the Output And Explain Why?

// for...in Loop
// for...in Loop is generally used for objects

let cv = [1, 2, 3, 4];

//console.log(typeof cv); // return object

for (let elem in cv) {
  //console.log(elem);
}

//Explanation
// The array arrz is defined as [1, 2, 3, 4],
//which means it has four elements at indexes 0, 1, 2, and 3.

//for...in Loop:
//The for...in loop iterates over the indexes (or keys) of an object.
//Since arrays are just objects with numeric keys (indexes),
//for...in will loop over those indexes.

//for...of Loop
//for...of iterates over the values of arrays. For arrays,
//for...of is the preferred loop to access the values directly.

let arrza = [1, 2, 3, 4, 5];

for (let elem of arrza) {
  //console.log(elem);
}

//4.9: You have to create a Shopping_Cart array with following features :

// Shopping Cart object with methods
const Shopping_Cart = {
  cart: [], // Array to hold items

  // Method to add item to the cart
  addItem(itemName) {
    this.cart.push(itemName); // Add the item to the cart
    console.log(`${itemName} added to the cart.`);
  },

  // Method to remove an item from the cart
  removeItem(itemName) {
    const index = this.cart.indexOf(itemName); // Find index of the item
    if (index !== -1) {
      this.cart.splice(index, 1); // Remove item if it exists
      console.log(`${itemName} removed from the cart.`);
    } else {
      console.log(`${itemName} not found in the cart.`);
    }
  },

  // Method to return the size of the cart
  cartSize() {
    return this.cart.length; // Return the number of items in the cart
  },
};

// Example usage
//Shopping_Cart.addItem('Apple');
//Shopping_Cart.addItem('Mango');
//Shopping_Cart.addItem('Papaya');
//Shopping_Cart.addItem('Banana');
//Shopping_Cart.addItem('Orange');

//console.log(`Cart Size: ${Shopping_Cart.cartSize()}`); // Cart Size: 3

//Shopping_Cart.removeItem('Banana');

//console.log(`Cart Size: ${Shopping_Cart.cartSize()}`); // Cart Size: 2

//console.log(Shopping_Cart.cart);

///----------------------------------------

//push()

//Key Points:
//It adds elements to the end of the array.
//Modifies the original array in place.
//You can push multiple elements at once.

//It modifies the original array by appending the new elements
//returns the new length of the array.

let ArrayItem = [1, 2, 3, 45, 6, 7];

let resuA = ArrayItem.push(8, 9, 10); //push() method is used to add one or more elements to the end of an array
//console.log(resuA);
//console.log(ArrayItem);

// pop()
//Key Points:
//It removes the last element of the array.
//Modifies the original array in place.
//Returns the removed element, or undefined if the array is empty.

//Returns The removed element from the array.
//If the array is empty, it returns undefined.

let fruits = ["Apple", "Banana", "Orange"];

let removedElement = fruits.pop();
//console.log(fruits);          // Output: ['Apple', 'Banana']
//console.log(removedElement);   // Output: 'Orange'
//-----------------------------------------------

// Function convertTemperature FtoC and CtoF

// Fahrenheit = (Celsius * 9/5) + 32

// Celsius=(Fahrenheit − 32) * 5/9

// function FtoCandCtoF(val, sc) {
//   if (sc === "FtoC") {
//     return ((val - 32) * 5) / 9;
//   } else if (sc === "CtoF") {
//     return (val * 9) / 5 + 32;
//   } else {
//     return "Invalid value";
//   }
// }

// let temp = 25;
// let tempInF = FtoCandCtoF(temp, "CtoF");
// console.log(`${temp}°C in Fahrenheit is: ${tempInF}°F`);

// let tempInC = FtoCandCtoF(temp, "FtoC");
// console.log(`${temp}°F in Celsius is: ${tempInC.toFixed(2)}°C`);
//-------------------------------------------------------------

//Chapter 5 (DOM)

//5.1: Explain difference between innerText and innerHTML in the following example?

//[From video lecture 5.4]

//let content = document.getElementById("content");
//console.log(content.innerHTML);
//console.log(content.innerText);

//innerHTML:
//Retrieves or sets the HTML content of an element as a string, including any HTML tags.
//Allows you to insert or manipulate HTML elements dynamically.

//innerText:
//Retrieves or sets the text content of an element.
//Ignores any HTML tags inside the element and returns the text.

//Summary:
//innerText: Focuses on the text content, ignores HTML tags, and only captures what is visible to the user.
//innerHTML: Focuses on both the content and the HTML structure, including tags, and can be used to manipulate the DOM dynamically by adding/removing HTML elements.

//--------------------------------------------------------------

//Chapter 6 ( DOM - Forms ) -------> Incomplete

//6.1: Create regex for password with the following validations.

//1.Length of password at least of 8 characters

//2.contain at least one special character

//3.contain at least one alphabet (a-z) character

// let form = document.querySelector('.testForm');

// let inputPassword = document.querySelector('.inputPass');

// let requiredPasswordPattern = 'create your regex here';

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let password = inputPassword.value;

//   let result = requiredPasswordPattern.test(password);

//   if (result == true) {
//     console.log('Your password validated successfully');
//   } else {
//     console.log('try again with new password');
//   }
// });

//----------------------------------------------------------------

//Chapter 7 (Array Methods)

// 7.1: You have given array of strings. Your task is to obtain last two elements of given array using slice method?

let admins = ["john", "paul", "Neha", "harry"];

let rr = admins.slice(2);

//console.log(rr);
//console.log(admins.length);

//----------------------------------------------------------------

//7.2: You have given an array of 5 elements(1-5). Your task is defined as below.

//1.You have to delete 2 elements starting from index 2.

//2.You have to add 3 new elements on index 1 choice.

//3.Display the 2 deleted elements in console (from step 1)

let ar1 = [1, 2, 3, 4, 5];

// Step 1: Delete 2 elements starting from index 2
// let deletedElem = ar1.splice(2,2) // splice() mutating method

// console.log(ar1.splice(1,0,1,2,3));
// console.log(deletedElem);
// console.log(ar1);

//console.log("Deleted Element :",deletedElem);

//===================================================================

//1.You have to delete 4 elements starting from index 3.

//2.You have to add 4 new elements on index 1 choice.

//3.Display the 4 deleted elements in console (from step 1)

let arrString = [
  "Shamshad",
  "Asmat",
  "Farooq",
  "Siddique",
  "Amber",
  "Khalid",
  "Shahida",
  "Fatema",
];
//console.log(arrString);

// let deleteName = arrString.splice(3,4)
// console.log(deleteName);
// console.log(arrString);

// console.log(arrString.splice(1,0,'a','b','c','d'));
// console.log(arrString);

//===========================================================

// let arrAlphabet = [1,2,3,4,5,6,7,8,9]

// //console.log(arrAlphabet.length);
// let deletedEle = arrAlphabet.splice(3,4)

// console.log(arrAlphabet.splice(1,0,'w','x','y','z'));
// console.log(deletedEle);
// console.log(arrAlphabet);

//------------------------------------------------------------

//7.3: What happens if we use negative number inside slice method?

const arrDigit = [1, 4, 7, 6, 8];

//console.log(arrDigit.slice(-2)); //return [6,8]

//7.4: Write three different methods/approaches to get last element of the array?

//1
function getLastElement() {
  let arrs1 = [1, 2, 3, 4, 5];
  let lastElement1 = arrs1[arrs1.length - 1]; //arr[arr.length - 1]: Efficient, does not modify the array.
  //console.log(lastElement1);
}

//getLastElement();

//2
let getLastArrElement = function () {
  let arrs2 = [1, 2, 3, 4, 5];
  let lastElement2 = arrs2.slice(-1)[0]; //Here, slice(-1) returns an array with the last element, and [0] accesses the element inside the array.
  //console.log(lastElement2);
};

//getLastArrElement();

//3
let arrowFunctio = () => {
  const arrNum = [1, 4, 7, 6, 8];
  //console.log(arrNum.slice(-1)[0]);
};

//arrowFunctio();

//Extra Example of 7.4:

//1 approach. Using Array Length:
//You can use the length property of the array to access the last element by subtracting 1 from the array's length (since array indexing is zero-based).

let arrs1 = [1, 2, 3, 4, 5];
let lastElement1 = arrs1[arrs1.length - 1]; //arr[arr.length - 1]: Efficient, does not modify the array.
//console.log(lastElement1); // Output:

//2 approach. Using slice():
//The slice() method can be used to get the last element by slicing the array from the end. Passing -1 as the argument gives the last element.

let arrs2 = [1, 2, 3, 4, 5];
let lastElement2 = arrs2.slice(-1)[0]; //Here, slice(-1) returns an array with the last element, and [0] accesses the element inside the array.
//console.log(lastElement2);

//3 approach. Using pop():
//arr.pop(): Removes and returns the last element, but modifies the array.

//----------------------------------------------------

//7.5: You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element

const numberss = [1, 2, 3, 4, 5];

// Use both index and array as parameters
let resultd = numberss.map((num, index, arr) => {
  //console.log(`Index: ${index}, Element: ${num}, Original Array: ${arr}`);
  return num * 2;
});

//console.log(resultd);

//==========================

let numbers = [1, 2, 3, 4, 5];

// Create a new array where each element is multiplied by 2
let doubledNumbers = numbers.map((num) => num * 2);

//console.log(doubledNumbers);
//console.log(numbers);

//==========================

let numberse = [1, 2, 3, 4, 5];

// Create a new array where each element is multiplied by 2
let doubledNumbers1 = numberse.filter((num) => num * 2);

//console.log(doubledNumbers1); // num * 2 is not a condition so here filter() will not be working
//console.log(numberse);

//------------------------------------------------------

//7.6 You have given an array of scores
//in which score of each student stored.
// Create a new array with the help of original scores array in which only those scores exist greater than 75%

let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];

// Filter out scores greater than 75%
let highScores = scores.filter((score) => score > 75);

//console.log(highScores);

//In this case, the function score => score > 75 checks
//whether each score is greater than 75.
// Only those scores that satisfy the condition will be included in the highScores array.

//filter() method is simple and efficient for filtering based on conditions.

//---------------------------------------------------------

//7.7: You have given an array of numbers nums.
//You have to find sum of all array elements using reduce method?

let nums = [2, 3, 5, 7, 8, 4, 9];

let sum = nums.reduce((acc, curval) => acc + curval);

//console.log(sum);

//---------------------------------------------------------

//7.8: You have given an array of numbers nums.
//You have to find the index of value 8 using built-in method of array?

let numsd = [2, 3, 5, 6, 8, 6, 4, 8];

//console.log(numsd.indexOf(8));

//---------------------------------------------------------

//7.9: You have given an array of objects of users as below. Find the specified user with name = "John"

//Also find the position (index+1) of that user inside the array?

//To find the specified user with the name "John" in the users array, we can use the find() method.

//method. To find the position (index+1) of that user, you can use the findIndex() method.

let users = [
  {
    name: "Paul",

    age: 24,

    verified: true,
  },

  {
    name: "John",

    age: 21,

    verified: false,
  },

  {
    name: "Neha",

    age: 19,

    verify: true,
  },
];

// Find the user with name "John"
//let userJohn = users.find(user => user.name === "John");

let userJohn = users.find((user) => user.name === "John");

//console.log(userJohn);

// Find the position (index + 1) of the user with name "John"
let position = users.findIndex((user) => user.name === "John") + 1;

//console.log(position);

// find()

//The find() method in JavaScript is used to search through an array
//and return the first element that satisfies a specified condition provided in a callback function.
//If no elements satisfy the condition, it returns undefined.

//Key Features:
//It returns only the first matching element and stops further iterations.
//If no element matches the condition, it returns undefined.
//It does not modify the original array.

//findIndex()

//The findIndex() method in JavaScript is used to search through an array
//and return the index of the first element that
//satisfies a specified condition defined in a callback function.
//If no elements satisfy the condition, it returns -1.

//Key Features:
//It returns the index of the first matching element and stops further iterations.
//If no element matches the condition, it returns -1.
//It does not modify the original array.

//--------------------------------------------------------

//7.10: Guess the Output and explain Why?

let numsw = [1, 2, 4, 5, [6, [8]], [9, 0]];
//console.log(numsw);

let res1 = numsw.flat(1); // here 1 is depth
//console.log( res1);

let ress = numsw.flatMap((elem) => elem);

//console.log(res1, ress);

//The flat()

//The flat() method in JavaScript is used to create a new array
//with all sub-array elements concatenated into it recursively up to
//a specified depth.
//This is particularly useful when dealing with nested arrays,
//allowing you to "flatten" them into a single-level array.

//Key Features:
//Creates a new array: flat() does not modify the original array.
//Supports multiple levels: You can specify how deeply you want to flatten the array (e.g., 1 level, 2 levels, etc.).
//If no depth is provided, it defaults to flattening by one level.

//flatMap()

//The flatMap() method in JavaScript is a combination of the map()
//and flat() methods.
//It first maps each element using a provided mapping function,
//and then flattens the result into a new array.
//This method is particularly useful when you want to perform
//a mapping operation that results in arrays,
//and you want to flatten those arrays in one go.

//Key Features:
//Combines both mapping and flattening in a single method.
//Creates a new array and does not modify the original array.
//Flattens the result by one level.

//mapping operation:
//In JavaScript, a mapping operation refers to the process
//of transforming each element of an array into a new value
//using a specified function. The primary method
//used for this purpose is the map() method,
//which creates a new array populated with the results of calling
//a provided function on every element in the original array.

//-----------------------------------------------------------

//Incomplete

//7.11: You have given an array of nums.
//Write a program to sort the elements of array
//in descending order using built-in method of array.

// what is meant by  sort the elements of array ?
//Sorting the elements of an array refers to the process of
//arranging the elements in a specific order,
//typically either in ascending or descending order.
//Sorting can be applied to arrays of various data types,
//including numbers, strings, and objects.

let numsss = [5, 1, 4, 6, 8, 3, 9];

let numsDesc;

//-----------------------------------------------------------

//7.12: Guess the Output and Explain Why?

let arrt = [1, 2, 3, 4];

let nnrr = arrt.splice(1, 2).pop();

//console.log(nnrr);

//-----------------------------------------------------------

// 7.13You have given an array of numbers nums You have to check
//if all elements of the array > 15 using built-in array method.
//return true or false

let numarr = [16, 17, 18, 28, 22, 1];

let rsultttt = numarr.every((num) => num > 15);

//console.log(rsultttt);

// every()

//The every() method in JavaScript is used to test
//whether all elements in an array pass the condition
//provided by a callback function.
//It returns true if all elements pass the test,
//otherwise, it returns false.

//Key Features:
//The every() method returns true if all elements pass the test (i.e., the callback function returns a truthy value for all elements).
//It returns false if any element fails the test (i.e., the callback function returns a falsy value for at least one element).
//The every() method does not modify the original array.
//The test is stopped as soon as one element does not satisfy the condition.

////--------------------------------------------------------------------------------------

//spread operator (...)

//The spread operator (...) in JavaScript allows you to expand (or "spread") elements
//of an iterable (like an array or object) into individual elements.
//It is a powerful tool for working with arrays, objects, and function arguments,
//making operations like copying, merging, or combining data more concise and readable.

//Key Points:
//The spread operator unpacks the elements of an array or object.
//It works with arrays, objects, and function arguments.
//The operator helps in operations like copying, concatenating, and merging arrays or objects.

//It's useful for more readable, concise, and efficient code, eliminating the need for loops or more complex operations.

//---------------------

let num = [1, 2, 3, 4, 5];

let updatenum = num.push(6);

//console.log(updatenum);

let add = (a, b) => {
  return console.log(a + b);
};

//add(3,5)

//-----------

// practice

for(let i=1; i<11; i++ ){
  console.log(i);
  
}







