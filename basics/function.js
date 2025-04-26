//SCOPING
//Global scope : jo bhi variable function ke bahar define kiye gaye hain unhe global scope kehte hain
//Local scope : jo bhi variable function ke andar define kiye gaye hain unhe local scope kehte hain
//Function scope : jo bhi variable function ke andar define kiye gaye hain unhe function scope kehte hain
//Block scope : jo bhi variable function ke andar define kiye gaye hain unhe block scope kehte hain

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Arrow function : arrow function ko define karne ka syntax hai =>
// const add = (a, b) => a + b; // arrow function ko define karne ka syntax hai =>
// console.log(add(2, 3)); // 5
// // no curly braces and no return statement are needed for a single line function
// // if you want to use curly braces and return statement, you can do it like this:
// const add2 = (a, b) => {
//   return a + b;
// };
// console.log(add2(2, 3)); // 5
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// IIFE function : IIFE function ko define karne ka syntax hai (function() {})();
(function add() {
  console.log(1 + 2);
})(); // always add semicolon at the end of IIFE function
//this was named IIFE
(() => {
  console.log(1 + 2);
})();
//this was unamed IIFE
