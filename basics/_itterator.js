//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
//while
// let index = 0;
// while (index < array.length) {
//     const element = array[index];
//     index++;
// }
//do while
// let index = 0;
// do {
//     const element = array[index];
//     index++;
// } while (index < array.length);
// we generally dont use do while loop as it is not a good practice to use it in this case. if the not met it will still run once.
// for of loop
// const array = [1, 2, 3, 4, 5];
// for (const i of array) {
//   console.log(i);
// }
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
for (const [key, value] of map) {
  console.log(key, value);
} //here we are using destructuring to get the key and value of the map. we can also use map.entries() to get the same result.
// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. it is not used to iterate over objects. for that we use for in loop.
// for in loop
const newobkj = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};
for (const key in newobkj) {
  console.log(key, newobkj[key]);
} //here we are using for in loop to iterate over the object. we can also use Object.entries() to get the same result. but for in loop is more readable and easy to understand.
// for in loop is used to iterate over the properties of an object. it is not used to iterate over arrays, maps, sets, etc. for that we use for of loop.
