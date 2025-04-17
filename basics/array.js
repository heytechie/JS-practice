//to merge arrays
const arr1 = ["iron man","Spiderman","thor"]
const arr2 = ["batman","superman","joker"]
//using concat
// const newarr = arr1.concat(arr2)
// console.log(newarr)
//using spread operator 
// const newarr = [...arr1,...arr2];
// console.log(newarr)
//using flat cmd to flat an array and returns a normal array for an array of array
const another_arr = [1,2,3,[4,5,6,[7,8,9]]];
const realAnother_arr = another_arr.flat(Infinity)
console.log(realAnother_arr)