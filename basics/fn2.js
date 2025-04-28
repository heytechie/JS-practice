//foreach(property of array) // 1 variation
const array = [1, 2, 3, 4, 5];
array.foreach(function (element) {
  //   console.log(element);
}); //here we are using foreach method to iterate over the array. it is not a good practice to use foreach method as it is not supported in all browsers. it is better to use for of loop or forEach method of array. but forEach method is more readable and easy to understand. it is also faster than for of loop.
//2nd variation using arrow function
array.forEach((element) => {
  console.log(element);
}); //here we are using arrow function to iterate over the array. it is more readable and easy to understand. it is also faster than for of loop. but it is not supported in all browsers. it is better to use for of loop or forEach method of array. but forEach method is more readable and easy to understand. it is also faster than for of loop.
//Iterating objects inside array
const myCoding = [
  {
    language: "JavaScript",
    level: "Intermediate",
  },
  { language: "Python", level: "Beginner" },
  {
    language: "Java",
    level: "Advanced",
  },
];
myCoding.forEach((item) => {
  console.log(item.language, item.level);
});
